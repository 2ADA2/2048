import { calcField } from "./calculateField";
export const checkMoves = (field) => {
    const newField = [];
    field.forEach(row => {
        let newRow = [];
        row.forEach(e => newRow.push(parseInt(e)));
        newField.push(newRow);
    });
    for (let i=0;i<5;i++){
        if (JSON.stringify(newField) != JSON.stringify(calcField(newField,i, false))) return true
    }
    return false
}