import { useState } from 'react';

function HookUseState02(){

    const [text, setText] = useState('');

    const addText = () => {
        setText(text + 'abcde');
    }

    return(
        <>
            <div>{text}</div>
            <button type="button" onClick={addText}>add text</button>
        </>
    );

}

export default HookUseState02;