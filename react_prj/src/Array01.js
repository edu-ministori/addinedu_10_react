// 객체 배열 렌더링 - 기초 방식
function Array01(){
    const carArray = [
        {
            id : 1,
            carname : 'Fiat',
            color : 'white'
        },
        {
            id : 2,
            carname : 'Hyundai',
            color : 'black'
        },
        {
            id : 3,
            carname : 'Kia',
            color : 'silver'
        }
    ];

    return(
        <ul>
            <li>
                <span>{carArray[0].id} - </span>
                <span>{carArray[0].carname} - </span>
                <span>{carArray[0].color}</span>
            </li>
            <li>
                <span>{carArray[1].id} - </span>
                <span>{carArray[1].carname} - </span>
                <span>{carArray[1].color}</span>
            </li>
            <li>
                <span>{carArray[2].id} - </span>
                <span>{carArray[2].carname} - </span>
                <span>{carArray[2].color}</span>
            </li>
        </ul>
    );
}

export default Array01;