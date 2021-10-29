// 배열과 컴포넌트 분리
import Array04List from "./Array04List";

function Array04(){
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
        <Array04List array={carArray} />
    );
}

export default Array04;