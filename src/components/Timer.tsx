import React, { useState, useRef, } from 'react';

interface Iprops {
    setShowResultAlert: React.Dispatch<React.SetStateAction<boolean>>
    setStartGame: React.Dispatch<React.SetStateAction<boolean>>
}


const Timer: React.FC<Iprops> = React.memo(({ setShowResultAlert, setStartGame }) => {
    const [timer, setTimer] = useState(180);
    const interv: React.MutableRefObject<any> = useRef(null);

    const run = () => {
        interv.current = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000)
    }

    function startTimer() {
        setStartGame(true);
        run();
    }

    const formatTime = (timer: number) => {
        const getSeconds: string = `0${(timer % 60)}`.slice(-2);
        const minutes: string = `${Math.floor(timer / 60)}`;
        return `${minutes} : ${getSeconds}`;
    }

    if (timer === 0) {
        setTimeout(() => {
            clearInterval(interv.current);
            setShowResultAlert(true);
        })
    }


    return (
        <div className='timer'>
            <button className='button' onClick={startTimer}>start</button>
            <div className='title'>{formatTime(timer)}</div>
        </div>
    )
})

export default Timer;
