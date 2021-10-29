function ListItem({ value }){
    return(
        <li>
            <span>{value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color}</span>
        </li>
    );
}

function Array04List({ array }){
    return(
        <ul>
            {/*             
            {array.map((car) => {
                return(
                    <ListItem value={car} key={car.id} />
                );
            })}
            */}

            {array.map( car => <ListItem value={car} key={car.id} /> )}
        </ul>
    );
}

export default Array04List;