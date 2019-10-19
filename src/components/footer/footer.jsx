import React from 'react';
import './footer.css'
const Footer = () => {
    return (
<footer className="page-footer font-small bg-info pt-4 text-white">

  <main className="container-fluid text-center text-md-left">

    <section className="row">
    <section className="col-md-6 mt-md-0 mt-3">

    <p>Made with pounded yam and green <span role="img" aria-label='tea'>☕</span> by <a href="123">Ojo Temiloluwa Philip</a></p>

    </section>
      <hr className="clearfix w-100 d-md-none pb-1"/>
      </section>
    </main>
     <p className="footer-copyright text-center pb-3 bg-info">© 2019 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> Say thank you</a>
  </p>

</footer>
    )
}

export default Footer;