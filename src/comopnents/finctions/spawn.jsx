import { getRandomInt } from "./random";
export const spawn = (field) => {
    let newField = field.slice();
    let count = 0;
    newField.forEach(e => {
        count += e.filter(e => !e).length
    });
    count = (getRandomInt(1,count));
    newField = newField.map(row => {
         return row.map(e=>{
            if(!e) {
                if(count) count -=1;
                if(!count){
                    count = Infinity
                    return (getRandomInt(0,100)>25) ? "2n" : "4n"; 
                }
            }
            return e
        })
    })
    return newField;
}