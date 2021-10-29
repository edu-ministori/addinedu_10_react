import { useState, useRef } from 'react';

import Array05List from './Array05List';

function Array05(){
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
    }

    return(
        <>
            <div>
                <input type="text" name="carname" onChange={updateObject} />
                <input type="text" name="color" onChange={updateObject} />
                <button type="button" onCLick={createObject}>등록</button>
                <div>{carname} {color}</div>
            </div>

            <Array05List array={carArray} />

        </>
    );
}

export default Array05;