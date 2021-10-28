import layout from './layout.module.css'

function Layout(){
    return(
        <div id={layout.wrap} className={layout.wrap}>
            <header className={layout.header}>header</header>
            <nav className={layout.nav}>nav</nav>
            <div className={layout['contents-wrap']}>
                <div className="contents">
                    <section className={layout.section}>section</section>
                    <article className={layout.article}>article</article>
                </div>
                <aside className={layout.aside}>aside</aside>
            </div>
            <footer className={layout.footer}>footer</footer>
        </div>
    );
}

export default Layout;