import React from 'react'
import './tips.css'

const Tip = () => {
    return (
        <section className="card section col-lg-6">
            <h2 className="card-header"> Tips from Users </h2>
            <article className="card-body">
                <blockquote className="blockquote mb-0">
                <p>Seat close to the door</p>
                <footer className="blockquote-footer">Twitter <cite title="Source Title">@codekagei</cite></footer>
                </blockquote>
                <a className="btn btn-success mt-2" href='123'>Add tip</a>
            </article>
        </section>
    )
}

export default Tip;