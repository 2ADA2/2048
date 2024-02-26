import store from "../../store/store";
import "../../styles/modal.css"

export const LoseModal = () => {
    return (
        <div className = "modal loose">
            <h2>Game over!</h2>
            <button onClick = {() => store.restart()}>try again</button>
        </div>
    )
}