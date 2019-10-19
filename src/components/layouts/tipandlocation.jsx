import React from 'react'
import Tip from '../tips/tips'
import Location from '../location/location'


const TipandLocation = () => {
    return (
        <section className="container">
            <section className='row'>
                <article className="col-lg-6">
                <Tip />
                </article>
                <article className="col-lg-6">
                <Location />
                </article>
            </section>
        
       
    </section>
    )
}

export default TipandLocation;