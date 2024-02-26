import "../../styles/score.css"
import store from "../../store/store";
import { useEffect, useRef, useState } from "react";
function isRestart(){
    if(store.end) store.restart();
    else if (window.confirm("Are you sure you want to start a new game? All progress will be lost.")){
        store.restart();
    }

}

function ScoreDifference(){
    setTimeout(() => {
        store.cleanDifference()
    }, 300)
    return <p className = "difference">+{store.difference}</p>
}

export const ControlPanel = () => {
    const [show, setShow] = useState(0);
    const score = store.score;
    return (
        <div className = "control-panel">
            <div className="restart">
                <button onClick={() => isRestart()} tabIndex={-1}>restart</button>
            </div>
            <div className = "score">
                score: {score}
                {(store.difference) ? <ScoreDifference/>:<></>}
                
            </div>
        </div>
    )
}