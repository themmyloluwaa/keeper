import React from 'react';

const SearchList = () => {
    return (
        <section>
            <input type="search" name="search" id=""/>
            <article>
                <h2>Experience</h2>
                <p>State</p>
                <p>location - Kubwa</p>
                <p>destination - Arab road</p>
                <i className="fas fa-street-view"></i>
                <a className="btn btn-success mt-2" href='123'>View More</a>
            </article>
        </section>
        )
}

export default SearchList;