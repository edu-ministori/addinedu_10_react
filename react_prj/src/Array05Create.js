function Array05Create({ updateObject, createObject, carname, color }){
    return(
        <div>
            <input type="text" name="carname" onChange={updateObject} value={carname} />
            <input type="text" name="color" onChange={updateObject} value={color} />
            <button type="button" onClick={createObject}>등록</button>
        </div>
    );
}

export default Array05Create;