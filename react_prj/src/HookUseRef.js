import { useRef } from 'react';

function HookUseRef(){

    // useRef에 초기값 지정하지 않고 사용
    const inputText = useRef();

    const moveFocus = () => {
        inputText.current.focus();
    }

    return(
        <>
            <input type="text" ref={inputText} />
            <button type="button" onClick={moveFocus}>초기화</button>
        </>
    );

}

export default HookUseRef;