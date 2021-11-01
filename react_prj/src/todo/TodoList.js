import item from './todoitem.module.css';

function TodoItem({ value, removeContent, updateCheck }){

    return(
        // ` 을 사용해서 템플릿 리터럴 형태로 여러개의 클래스를 나열할 수 있음
        <li className={`${item.item} ${value.hide ? item.hide : ''}`}>
            <input type="checkbox" className={item['item-check']} checked={value.checked} onChange={() => {updateCheck(value.id)}} />
            <div className={item['item-text']}>{value.content}</div>
            <button type="button" className={item['item-del']} onClick={() => {removeContent(value.id)}}>
                <img src="add_button.svg" className={item['item-image']} alt="" />
            </button>
        </li>
    );
}

function TodoList({ array, removeContent, updateCheck }){
    return(
        <section className="section">
            <ul className="todo-list">
                {array.map( todo => <TodoItem value={todo} key={todo.id} removeContent={removeContent} updateCheck={updateCheck} /> )}
            </ul>
        </section>
    );
}

export default TodoList;