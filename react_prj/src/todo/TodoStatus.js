import status from './todostatus.module.css';

function TodoStatus({ number, item }){
    return(
        <section className="section">
            <div className={status.wrap}>
                <div className={status.left}>{number}개 남음</div>
                <div className={status.filter}>
                    <button type="button" className={status.btn} onClick={item.showAll}>전체목록</button>
                    <button type="button" className={status.btn} onClick={item.showUnChecked}>남은목록</button>
                    <button type="button" className={status.btn} onClick={item.showChecked}>완료목록</button>
                </div>
                <div className="status-clear">
                    <button type="button" className={status.btn} onClick={item.removeChecked}>완료삭제</button>
                </div>
            </div>
        </section>
    );
}

export default TodoStatus;