import { useState } from 'react';

function HookUseState01(){

    const [value, setValue] = useState(0);

    const add = () => {
        // value = value + 1;
        setValue(value + 1);
        console.log(value);
    }

    const sub = () => {
        setValue(value - 1);
        console.log(value);
    }

    return(
        <>
            <div>{value}</div>
            <button type="button" onClick={add}>Add</button>
            <button type="button" onClick={sub}>Sub</button>
        </>
    );

}

export default HookUseState01;