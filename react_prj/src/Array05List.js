function ListItem({ value }){
    return(
        <li>
            <span>{value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color}</span>
        </li>
    );
}

function Array05List({ array }){
    return(
        <ul>
            {array.map( car => <ListItem value={car} key={car.id} /> )}
        </ul>
    );
}

export default Array05List;