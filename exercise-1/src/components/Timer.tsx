import React from "react";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import './style.css'; 

let timer;

interface Props {};

const Timer: React.FC = (props: Props) => {

    const [time, setTime] = useState<String>('');

    useEffect(() => {
        timer = setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }
    );


    return (
        <>
            <div className="container">
                <span className="timer"  >
                    {time}
                </span>
            </div>
        </>
    )
};

export default Timer;

