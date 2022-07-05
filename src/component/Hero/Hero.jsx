import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            {/*Hrader*/}
            <Header/>

            {/*The best ad */}
            <div className="the-best-ad">
                <div></div>
                <span>The Best Fitness Club In The Town</span>
            </div>

            {/*Hero Heading*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/*Figurs*/}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/*Hero buttons*/}
            <div className="hero-buttons">
                <buttons className="btn">Get started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">right</div>
    </div>
  )
}

export default Hero