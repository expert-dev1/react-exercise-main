import React from "react";
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import trackerStore from './store/trackerStore'


const App:React.FC = ( ) => (
    <>
        <Counter trackerStore={trackerStore}/>
    </>
);


ReactDOM.render(<App />, document.getElementById("root"));