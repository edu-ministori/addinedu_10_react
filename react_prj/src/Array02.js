// 객체 배열 렌더링 - 컴포넌트 분리
// 하나의 컴포넌트 파일안에 여러개 컴포넌트를 선언
// default component만 export하고 나머지 component는 내부에서 사용

function Array02List({ value }){
    return(
        <li>
            <span>{value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color}</span>
        </li>
    );
}

function Array02(){
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
            <Array02List value={carArray[0]} />
            <Array02List value={carArray[1]} />
            <Array02List value={carArray[2]} />
        </ul>
    );
}

export default Array02;