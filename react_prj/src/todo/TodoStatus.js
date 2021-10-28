import status from './todostatus.module.css';

function TodoStatus(){
    return(
        <section className="section">
            <div className={status.wrap}>
                <div className={status.left}>10개 남음</div>
                <div className={status.filter}>
                    <button type="button" className={status.btn}>전체목록</button>
                    <button type="button" className={status.btn}>남은목록</button>
                    <button type="button" className={status.btn}>완료목록</button>
                </div>
                <div className="status-clear">
                    <button type="button" className={status.btn}>완료삭제</button>
                </div>
            </div>
        </section>
    );
}

export default TodoStatus;