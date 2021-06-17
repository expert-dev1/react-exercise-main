import React from "react";
import ReactDOM from 'react-dom';
import Timer from './components/Timer';

const App: React.FC = () => (
    <>
        <Timer/>
    </>
);


ReactDOM.render(<App />, document.getElementById("root"));