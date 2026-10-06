export function Testimonials({ testimonials }) {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">Отзывы студентов</h2>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial) => (
                        <div className="review-card" key={testimonial.id}>
                            <img
                                className="review-card__avatar"
                                src={testimonial.avatar}
                                alt={`Аватар ${testimonial.name}`}
                            />

                            <div className="review-card__content">
                                <p className="review-card__text">
                                    {testimonial.text}
                                </p>

                                <span className="review-card__author">
                                    {testimonial.name} — курс «{testimonial.course}»
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
