import { useState } from 'react';

function HookUseState04(){

    const [inputObject, setInputObject] = useState({
        carname:'',
        color:''
    });

    // 구조분해할당
    const { carname, color } = inputObject;

    const updateValue = (event) => {
        // data의 형태
        // key(name) : value
        // 구조분해할당
        const {name, value} = event.target;

        /*
            ...(spread) 연산자 : 데이터를 전개(펼치는)하는 연산자
            Ex)
            const a = [1,2,3];
            const b = [...a,4,5,6]; => [1,2,3,4,5,6]
            const c = [...a,1,4,5]; => [1,2,3,4,5]

            데이터 불변성 : 기존 데이터를 유지하고, 새로운 데이터를 새로 가리킬 수 있도록 하는 것

            spread 연산자를 사용해서 이전 데이터를 유지하면서 새로운 데이터를 추가하는 형태로 사용해야 함
            => 새로운 객체를 생성해서 가리킬수 있도록 하여 리렌더링이 실행되도록 함
            ** 원소만 변경되면 레퍼런스(참조주소)가 변경되지 않기 때문에
               객체/배열 데이터가 변경된 것으로 인식되지 않음
        */

        setInputObject({
            ...inputObject,
            [name] : value // [] : 변수값을 사용하는 의미
        });
    }

    const reset = () => {
        setInputObject({
            carname : '',
            color : ''
        });
    }

    return(
        <>
            <input type="text" name="carname" onChange={updateValue} value={carname}/>
            <input type="text" name="color" onChange={updateValue} value={color} />
            <button type="button" onClick={reset}>reset</button>
            <div>
                <span>자동차 이름(색) : </span>
                <span>{carname} ({color})</span>
            </div>
        </>
    );
}

export default HookUseState04;