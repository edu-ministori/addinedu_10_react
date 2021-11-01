function ListItem({ value, removeObject, checkBox }){
    return(
        <li className={value.show ? '' : 'hide'}>
            <span><input type="checkbox" onChange={()=>{checkBox(value.id)}} checked={value.checked} /> - </span>
            <span>{value.checked + ''} {value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color} - </span>
            <button type="button" onClick={()=>{removeObject(value.id)}} >삭제</button>
        </li>
    );
}

function Array05List({ array, removeObject, checkBox }){
    return(
        <ul>
            {array.map( car => <ListItem value={car} key={car.id} removeObject={removeObject} checkBox={checkBox} /> )}
        </ul>
    );
}

export default Array05List;