import contents from './todocontents.module.css';

function TodoContents({children}){
    return(
        <section className={contents.contents}>
            {children}
        </section>
    );
}

export default TodoContents;