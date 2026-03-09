import React from 'react'
import beach from '../assets/beach.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className="section about" id="about">
            <Title title='about' subTitle='us' />
            <div className="about-center">
                <div className="about-img">
                    <img src={beach} alt="" />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, libero.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ipsa fugit temporibus quae accusamus doloremque.</p>
                    <a href="" className="btn">read more</a>
                </article>
            </div>
        </section>
  );
};

export default About