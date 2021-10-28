import { useState } from 'react';

function HookUseState03(){
    // input에 입력된 값 사용

    // javascript에서 처럼 DOM에 접근해서 입력된 내용을 읽어서 사용하는 것이 아니기 때문에
    // 이벤트가 발생해서 기능이 실행될 때 입력된 내용을 바로 사용 => 변수에 저장

    const [inputText, setInputText] = useState('');

    let tempText = '';

    const storeText = (event) => {
        tempText = event.target.value;
    }

    const printText = () => {
        setInputText(tempText);
    }

    const [inputShowText, setInputShowText] = useState('');

    const showText = (event) => {
        setInputShowText(event.target.value);
    }

    return(
        <>
            <div>
                <input type="text" onChange={storeText} />
                <button type="button" onClick={printText}>print</button>
                <div>{inputText}</div>
            </div>
            <br />
            <div>
                <input type="text" onChange={showText} />
                <div>{inputShowText}</div>
            </div>
        </>
    );

}

export default HookUseState03;