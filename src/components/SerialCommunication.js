import React, { useEffect, useState } from 'react';

const SerialCommunication = () => {
    const [port, setPort] = useState(null);
    const [reader, setReader] = useState(null);
    const [readableStreamClosed, setReadableStreamClosed] = useState(null);
    // const [decodedString, setDecodedString] = useState('');
    const [lineBuffer, setLineBuffer] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const requestSerialPort = async () => {

        if (port) return;
        const portLocal = await navigator.serial.requestPort();

        await portLocal.open({ baudRate: 9600 });
        console.log("port:", portLocal);
        // Prints "Is locked after open? false"
        setPort(portLocal);
        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = portLocal.readable.pipeTo(textDecoder.writable);
        const reader = textDecoder.readable.getReader();
        setReader(reader);
        setReadableStreamClosed(readableStreamClosed);

        console.log('port:', portLocal);
        let lineBufferTemp = '';

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) {
                    // |reader| has been canceled.
                    console.log('------------Done------------')
                    break;
                }
                // Do something with |value|...
                lineBufferTemp += value;
                let lines = lineBufferTemp.split('\n');
                while (lines.length > 1) {
                    let message = lines.shift();
                    setLineBuffer(prev => [...prev, message]);
                    // console.log(message);
                    // document.getElementById("info").innerHTML = message;
                }
                lineBufferTemp = lines.pop();
                // console.log(value)
            }
        } catch (error) {
            // Handle |error|...
        } finally {
            reader.releaseLock();
        }
        ;


    };

    ////////////////////////
    const handleConnect = () => {
        requestSerialPort();
    }
    const handleDisconnect = async () => {
        if (port) {
            console.log('port:', port);

            const textEncoder = new TextEncoderStream();
            const writer = textEncoder.writable.getWriter();
            const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

            //---- Important to close read first before close all -------
            reader.cancel();
            await readableStreamClosed.catch(() => { /* Ignore the error */ });
            //--------------------------------------

            writer.close();
            await writableStreamClosed;
            await port.close();

            setPort(null);
        }
    }
    useEffect(() => {
        const connection = (e) => {
            console.log('connection: ', e);
        }
        navigator.serial.addEventListener('connect', connection);
        return navigator.serial.removeEventListener('connect', connection);

    }, [port]);

    const sendDataToArduino = async (e) => {

        e.preventDefault();
        if (e.target['inputMessage'].value.trim() < 1) {
            e.target['inputMessage'].focus();
            return;
        }
        // console.log(e.target['inputMessage'].value)
        if (port && reader) {
            setLineBuffer([]);
            const encoder = new TextEncoder();
            const writer = port.writable.getWriter();
            // let text = 'Nice to meet you!'
            // console.log('data: ', data)
            await writer.write(encoder.encode(e.target['inputMessage'].value));
            // e.target['inputMessage'].value = '';
            setInputMessage('');
            e.target['inputMessage'].focus();
            writer.releaseLock();
        }
    };

    // useEffect(() => {
    //     if (port && reader) {
    //         const interval = setInterval(() => {
    //             sendDataToArduino('Hello Arduino');
    //         }, 1000); // Sending "hello world" every second
    //         return () => clearInterval(interval);
    //     }
    // }, [port, reader]);

    return (
        <div className='px-20 py-10 border-2 border-indigo-800 rounded-xl bg-indigo-950'>
            <p className='text-center mb-5'>Arduino is {port ? 'connected' : 'disconnected'}.</p>
            <div className='flex gap-2'>
                <button onClick={handleConnect} className='btnIndigo mb-5'>Connect Arduino</button>
                <button onClick={handleDisconnect} className='btnIndigo mb-5'>Disconnect Arduino</button>
            </div>
            <div >
                <form className='flex gap-2' onSubmit={sendDataToArduino}>
                    <input name='inputMessage' type='text' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} className='text-black h-9 px-2 rounded-md' />
                    <button type='submit' className='btnIndigo mb-5'>Write Message</button>
                </form>
            </div>
            <h3 className='font-bold text-xl'>I got message from Arduino</h3>
            <ul>
                {lineBuffer.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
        </div>
    );
};

export default SerialCommunication;
