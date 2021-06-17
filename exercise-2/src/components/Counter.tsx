import React from "react";
import { observer } from "mobx-react";
import './style.css'; 
import { StoreType } from "../store/interface";

interface Props {
    trackerStore: StoreType
};

const Timer= (props: Props) => {

    const handleIncrement = () => {
        props.trackerStore.increment()
    };

    const handleDecrement = () => {
        props.trackerStore.decrement()
    };


    return (
        <>
            <div className="container">
                <div>
                    <span className="clicks"  >
                        Clicks: {props.trackerStore.count}
                    </span>
                </div>
                <div className="button_container">
                    <button className="button" onClick={handleIncrement}>Increment</button>
                    <button className="button" onClick={handleDecrement}>decrement</button>
                </div>
            </div>
        </>
    )
};

export default observer(Timer);

