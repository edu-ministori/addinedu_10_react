// 객체 배열 렌더링 - 동적 렌더링
// map 함수 사용
// 1. 배열 데이터 집합에서 각 원소별 연산이 용이
// 2. 각 원소별 연산 이후에 새로운 배열이 반환
// 배열.map(function(배열원소이름){원소별 실행연산 코드})

function Array03List({ value }){
    return(
        <li>
            <span>{value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color}</span>
        </li>
    );
}

function Array03(){
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
            {carArray.map(function(car){
                return(
                    <Array03List value={car} key={car.id} />
                );
            })}
        </ul>
    );
}

export default Array03;