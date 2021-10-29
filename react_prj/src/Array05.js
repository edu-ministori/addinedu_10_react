import { useState, useRef } from 'react';

import Array05List from './Array05List';
import Array05Create from './Array05Create';

function Array05(){
    const [carArray, setCarArray] = useState([
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
    ]);

    const [inputText, setInputText] = useState({
        carname : '',
        color : ''
    });

    const { carname, color } = inputText;

    const nextIndex = useRef(4);

    const updateObject = (event) => {
        const {name, value} = event.target;

        setInputText({
            ...inputText,
            [name] : value
        });
    }

    const createObject = () => {
        // 객체 배열에 추가하기 위한 데이터
        const car = {
            id : nextIndex.current,
            carname : carname,
            color : color
        }

        // 배열에 새 데이터를 추가
        setCarArray([...carArray, car]);

        // input reset
        setInputText({
            carname : '',
            color : ''
        });

        // 다음 데이터 추가될 때 인덱스 번호
        nextIndex.current++;
    }

    const removeObject = (id) => {
        // car.id 값을 사용해서 일치하지 않는 배열(삭제하지 않는 배열) 요소들을 추출하여 새로운 배열을 생성
        // 배열.filter(function(배열원소){실행코드:비교구문})

        setCarArray(carArray.filter(function(car){
            return( car.id !== id )
        }));
    }

    return(
        <>
            <Array05Create updateObject={updateObject} createObject={createObject} carname={carname} color={color} />
            <Array05List array={carArray} removeObject={removeObject} />
        </>
    );
}

export default Array05;