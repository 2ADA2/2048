export const Field = (props) => {
    let field = []
    props.mass.forEach(e => {
        let row = [];
        e.forEach(elem => {
            if(typeof(elem) != "number"){
                if(elem == "2n" || elem == "4n"){
                    let name = parseInt(elem);
                    row.push(<tr className = 'block'>
                    {(elem)? <div className = {`number number${name} new-number`}>{name}</div>:""}
                    </tr>)
                }else {
                    let name = parseInt(elem);
                    row.push(<tr className = 'block'>
                    {(elem)? <div className = {`number number${name} sum` }>{name}</div>:""}
                    </tr>)  
                }                
            }else{
                row.push(<tr className = 'block'>
                {(elem)? <div className = {`number number${elem}`}>{elem}</div>:""}
                </tr>)                
            }

        });
        field.push (<td className = 'field-row'>{row}</td>);
    });

    return (
        <table className="field">
            {field}
        </table>
    );
}