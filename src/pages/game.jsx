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
import { BlockLink } from "../comopnents/elements/link";
import { checkMoves } from "../comopnents/finctions/checkMoves";


export const Game = observer(() => {
    const field = JSON.parse(JSON.stringify(store.field));
    const end = ((!checkMoves(field)) || store.end);
    console.log(end)

    function handleKeyDown(e){
        const codes = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        const index = codes.indexOf(e.code);
        if (index + 1) {
            store.cleanField();
            setTimeout(() => {
                const oldField = JSON.parse(JSON.stringify(store.field));
                const newField = calcField(oldField, index);
                store.updateField(newField);
            }, 10)
        }
    }

    useEffect(() => {
        const empty = [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];
        if(JSON.stringify(field) == JSON.stringify(empty)){
            setTimeout(()=>{
                const newField = spawn(field);
                store.updateField(spawn(newField));                  
            },10)  
        }
        window.addEventListener("keydown", prohibitScroll)
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keydown", prohibitScroll)
        };
    },[]);

    return (
    <>
        <section className="filler">
                <h2>Intersting links</h2>
                <BlockLink link = "https://play2048.co/" url = "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" header = "header"text = "text"/>
                <BlockLink link="https://play2048.co/" url="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" header="header" text="text" />
                <BlockLink link="https://play2048.co/" url="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" header="header" text="text" />
                <BlockLink link="https://play2048.co/" url="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" header="header" text="text" />
        </section>

        <div className = "game">
            {(end)?<LoseModal></LoseModal>:<></>}
            <div className = "game-container">
                <ControlPanel/>
                <Field mass = {field}></Field>                 
            </div>

        </div>

        <section className="rules-container">
            <h2>Rules</h2>
            <p>rules</p>
        </section>
    </>

    );
})