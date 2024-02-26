import {useState, useEffect, useRef} from "react";
import {Field} from "../comopnents/finctions/createField"
import "../styles/gamestyle.css";
import { calcField } from "../comopnents/finctions/calculateField";
import store from "../store/store"
import { observer } from "mobx-react-lite";
import { spawn } from "../comopnents/finctions/spawn";
import { LoseModal } from "../comopnents/layouts/loseModal";
import { ControlPanel } from "../comopnents/layouts/controlPanel";
import { prohibitScroll } from "../comopnents/finctions/prohibitScroll";


export const Game = observer(() => {
    const field = JSON.parse(JSON.stringify(store.field));
    const end = store.end;

    function handleKeyDown(e){
        const codes = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        const index = codes.indexOf(e.code);
        if (index + 1) {
            store.cleanField();
            setTimeout(() => {
                const oldField = JSON.parse(JSON.stringify(store.field));
                const newField = calcField(oldField, index);
                store.updateField(newField);
            }, 0)
        }
    }

    useEffect(() => {
        const empty = [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];
        if(JSON.stringify(field) == JSON.stringify(empty)){
            const newField = spawn(field);
            store.updateField(spawn(newField));                
        }


        window.addEventListener("keydown", prohibitScroll)
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keydown", prohibitScroll)
        };
    },[]);

    return (
        <div className = "game">
            {(end)?<LoseModal></LoseModal>:<></>}
            <div className = "game-container">
                <ControlPanel/>
                <Field mass = {field}></Field>                 
            </div>

        </div>
    );
})