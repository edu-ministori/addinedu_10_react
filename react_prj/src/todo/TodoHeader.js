import header from './todoheader.module.css';

function TodoHeader({ createContent, updateContent, content }){
    return(
        <header className={header.header}>
            <div className={header.section}>
                <h1 className={header.logo}>TODO APP</h1>
                <div className={header.form}>
                    <button type="button" className={header['form-btn']} onClick={createContent}>
                        <img src="add_button.svg" alt="" className={header['form-image']} />
                    </button>
                    <input 
                        type="text"
                        className={header['form-text']} 
                        placeholder="새 할일을 입력해주세요."
                        name="content"
                        onChange={updateContent}
                        value={content}
                    />
                </div>
            </div>
        </header>
    );
}

export default TodoHeader;