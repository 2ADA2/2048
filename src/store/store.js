import { makeAutoObservable } from "mobx";
import { spawn } from "../comopnents/finctions/spawn";

class Store {
    field = (JSON.parse(localStorage.getItem('field')) || [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);
    end = 0;
    score = (Number(localStorage.getItem("score")) || 0);
    difference = 0;
    maxScore = (Number(localStorage.getItem("max-score")) || 0);;

    constructor () {
        makeAutoObservable(this);
    }

    updateField(newField){
        this.field = newField.slice();
        localStorage.setItem('field', JSON.stringify(newField.slice()));
    }
    lose(){
        this.end = true
    }
    restart(){
        const newField = spawn([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
        this.field = spawn(newField);
        this.end = false;
        this.score = 0;
        localStorage.setItem('field', JSON.stringify(this.field.slice(0)));
        localStorage.setItem("score", 0)
    }
    cleanField(){
        let newField = [];
        this.field.forEach(e => {
            let row = [];
            e.forEach(elem => {
                row.push(parseInt(elem));
            })
            newField.push(row);
        })
        this.field = newField;
    }
    setScore(score){
        score = Number(parseInt(score));
        const oldScore = this.score;
        this.score = this.score + score;
        this.difference = this.score-oldScore;
        localStorage.setItem("score", this.score)
        console.log(localStorage.getItem("score"))
    }
    cleanDifference(){
        this.difference = 0;
    }
}

export default new Store();