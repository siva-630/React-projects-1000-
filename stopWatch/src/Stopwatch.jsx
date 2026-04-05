import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);

            }, 1000)
        }
    
        return () => clearInterval(interval)
    }
    ,[running])
     
    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const second = time % 60;
        return `${minutes}:${second < 10 ? "0" : ""}${second}`;

    };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  "></div>
  )
}

export default Stopwatch