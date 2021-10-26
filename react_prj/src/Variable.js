function Variable(){

    const car = {
        name : 'Hyundai',
        weight : '850kg',
        color : 'white'
    }

    return(
        <ul>
            <li><span>자동차 이름 : </span><span>{car.name}</span></li>
            <li><span>자동차 중량 : </span><span>{car.weight}</span></li>
            <li><span>자동차 색 : </span><span>{car.color}</span></li>
        </ul>
    );

}

export default Variable;