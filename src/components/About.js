import React from 'react';
import './Css/About.css';

function About() {
  return (
    <>
      <div className="container-fluid py-5 mt-5" id="about">
        <div className="row py-5">
          <div className='col'>
            <h1 className='display-3 fw-bold text-center pb-5'>About</h1>
            <p className='fs-5 px-2 text-center m-auto'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
