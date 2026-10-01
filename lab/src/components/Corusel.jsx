function Corusel() {
    return (<section className="courses">
        <div className="container">
            <h2 className="section-title">Наши курсы</h2>
            <div className="courses__grid">
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=React"
                        alt="React с нуля"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">Frontend</span>
                        <h3 className="course-card__title">React с нуля</h3>
                        <p className="course-card__meta">8 недель · Начальный уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">15 000 ₽</span>
                            <span className="course-card__rating">★ 4.8</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=Node.js"
                        alt="Node.js для бэкенда"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">Backend</span>
                        <h3 className="course-card__title">Node.js для бэкенда</h3>
                        <p className="course-card__meta">10 недель · Средний уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">18 000 ₽</span>
                            <span className="course-card__rating">★ 4.6</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=Python"
                        alt="Python для анализа данных"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">Data Science</span>
                        <h3 className="course-card__title">Python для анализа данных</h3>
                        <p className="course-card__meta">12 недель · Начальный уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">20 000 ₽</span>
                            <span className="course-card__rating">★ 4.9</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=UX%2FUI"
                        alt="UX/UI дизайн"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">Дизайн</span>
                        <h3 className="course-card__title">UX/UI дизайн интерфейсов</h3>
                        <p className="course-card__meta">6 недель · Начальный уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">13 500 ₽</span>
                            <span className="course-card__rating">★ 4.7</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=Java"
                        alt="Java Enterprise"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">Backend</span>
                        <h3 className="course-card__title">Java Enterprise</h3>
                        <p className="course-card__meta">14 недель · Продвинутый уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">24 000 ₽</span>
                            <span className="course-card__rating">★ 4.5</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
                <article className="course-card">
                    <img
                        className="course-card__image"
                        src="https://placehold.co/400x220?text=QA"
                        alt="Тестирование ПО"
                    />
                    <div className="course-card__body">
                        <span className="course-card__category">QA</span>
                        <h3 className="course-card__title">Тестирование ПО</h3>
                        <p className="course-card__meta">6 недель · Начальный уровень</p>
                        <div className="course-card__footer">
                            <span className="course-card__price">11 000 ₽</span>
                            <span className="course-card__rating">★ 4.6</span>
                        </div>
                        <button className="btn btn--primary btn--full">Записаться</button>
                    </div>
                </article>
            </div>
        </div>
    </section>);
}

export default Corusel;