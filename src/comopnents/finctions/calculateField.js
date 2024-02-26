import { checkMoves } from "./checkMoves";
import { spawn } from "./spawn";
import store from "../../store/store";

export const calcField = (field, index, check = true) => {
    let newField = field.map(e=>e.slice());
    let sum = 0;

    switch (index) {
        //вверх
        case 0:
            // рассчитываем новые массивы
            for (let i=0;i<4;i++){
                let row = newField.slice(0).map(e=>e[i])
                row = row.filter(e => e != null)
                let newRow = [];
                while (row.length){
                    //суммируем и/или добавляем в новый массив newRow
                    if (row[0] != row[1] || !row[0] || !row[1]) {
                        if(row[0]){
                            newRow.push(row[0]); 
                        }
                        row.splice(0, 1);

                    } else{
                        sum += row[0] + row[1];
                        newRow.push(row[0]+ row[1]+'sum'); 
                        row.splice(0,2);
                    }
                }
                //заполняем newRow nullaми
                while (newRow.length < 4) {
                    newRow.push(null)
                }
                //обновляем
                newField.map(e=>e.splice(i,1,newRow[newField.indexOf(e)]))
            }  
            break;
        // вправо
        case 1:
            for (let i = 0; i < 4; i++) {
                let row = newField.slice(0)[i]
                row = row.filter(e => e != null)
                let newRow = [];
                while (row.length) {
                    const index = row.length - 1
                    //суммируем и/или добавляем в новый массив newRow
                    if (row[index] != row[index-1] || !row[index] || !row[index-1]) {
                        if (row[index]) {
                            newRow.unshift(row[index]);
                        }
                        row.splice(index, 1);
                    } else {
                        sum += row[index] + row[index - 1];
                        newRow.unshift(row[index] + row[index - 1]+'sum');
                        row.splice(index - 1, 2);
                    }
                }
                //заполняем newRow nullaми
                while (newRow.length < 4) {
                    newRow.unshift(null);
                }
                //обновляем
                newField.splice(i,1,newRow);
            }
            break;
        // вниз
        case 2:
            for (let i = 0; i < 4; i++) {
                let row = newField.slice(0).map(e => e[i])
                row = row.filter(e => e != null)
                let newRow = [];
                while (row.length) {
                    const index = row.length-1
                    //суммируем и/или добавляем в новый массив newRow
                    if (row[index] != row[index - 1] || !row[index] || !row[index-1]) {
                        if (row[0]) {
                            newRow.unshift(row[index]);
                        }
                        row.splice(index, 1);

                    } else {
                        sum += row[index] + row[index - 1];
                        newRow.unshift(row[index] + row[index-1]+'sum');
                        row.splice(index-1, 2);
                    }
                }
                //заполняем newRow nullaми
                while (newRow.length < 4) {
                    newRow.unshift(null)
                }
                //обновляем
                newField.map(e => e.splice(i, 1, newRow[newField.indexOf(e)]))
            }  
            break;
        // влево
        case 3:
            for (let i = 0; i < 4; i++) {
                let row = newField.slice(0)[i]
                row = row.filter(e => e != null)
                let newRow = [];
                while (row.length) {
                    //суммируем и/или добавляем в новый массив newRow
                    if (row[0] != row[1] || !row[0] || !row[1]) {
                        if (row[0]) {
                            newRow.push(row[0]);
                        }
                        row.splice(0, 1);
                    } else {
                        sum += row[0] + row[1];
                        newRow.push(row[0] + row[1]+'sum');
                        row.splice(0 , 2); 
                    }
                }
                //заполняем newRow nullaми
                while (newRow.length < 4) {
                    newRow.push(null);
                }
                //обновляем
                newField.splice(i, 1, newRow)
            }
           break;
    }
    if (JSON.stringify(field) != JSON.stringify(newField)) newField = spawn(newField);
    if(check) {
        if(!checkMoves(newField)) store.lose()
        store.setScore(sum);
    }
    return newField;
}