function JsEvent(){
    let number = 0;

    const add = () => {
        number += 1;
        console.log(number);
    }

    const sub = () => {
        number -= 1;
        console.log(number);
    }

    return(
        <>
            {/* 값이 업데이트가 되더라도 화면 리렌더링이 발생되지 않음 */}
            <div>{number}</div>
            <button type="button" onClick={add}>Add</button>
            <button type="button" onClick={sub}>Sub</button>
        </>
    );
}

export default JsEvent;