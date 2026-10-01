export function Header() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CodeCamp — Каталог курсов</title>
            <link rel="stylesheet" href="style.css" />
            <header className="header">
                <div className="container header__inner">
                    <div className="logo">
                        Code
                        <span>Camp</span>
                    </div>
                    <nav className="nav">
                        <a href="#" className="nav__link">
                            Курсы
                        </a>
                        <a href="#" className="nav__link">
                            Преподаватели
                        </a>
                        <a href="#" className="nav__link">
                            Отзывы
                        </a>
                        <a href="#" className="nav__link">
                            Контакты
                        </a>
                    </nav>
                    <button className="btn btn--outline">Войти</button>
                </div>
            </header>
        </>
    )
}