export const Courses = () => {
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
            </div>
        </div>
    </section>);
}