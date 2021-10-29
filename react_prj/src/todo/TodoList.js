import item from './todoitem.module.css';

function TodoItem({ value, removeContent }){
    return(
        <li className={item.item}>
            <input type="checkbox" className={item['item-check']} />
            <div className={item['item-text']}>{value.content}</div>
            <button type="button" className={item['item-del']} onClick={() => {removeContent(value.id)}}>
                <img src="add_button.svg" className={item['item-image']} alt="" />
            </button>
        </li>
    );
}

function TodoList({ array, removeContent }){
    return(
        <section className="section">
            <ul className="todo-list">
                
                {array.map( todo => <TodoItem value={todo} key={todo.id} removeContent={removeContent} /> )}

            </ul>
        </section>
    );
}

export default TodoList;