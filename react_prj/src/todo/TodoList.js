function TodoList({children}){
    return(
        <section className="section">
            <ul className="todo-list">
                {children}
            </ul>
        </section>
    );
}

export default TodoList;