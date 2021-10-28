import item from './todoitem.module.css';

function TodoItem(){
    return(
        <li className={item.item}>
            <input type="checkbox" className={item['item-check']} />
            <div className={item['item-text']}>할일 todo</div>
            <button type="button" className={item['item-del']}>
                <img src="add_button.svg" className={item['item-image']} alt="" />
            </button>
        </li>
    );
}

export default TodoItem;