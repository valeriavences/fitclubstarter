import React from "react";
import Header from "../Header/Header";
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCouter from 'number-counter'

import {motion} from 'framer-motion'
const Hero = () => {

    const transition = {type: 'spring', duration: 3};
    const mobile= window.innerHeight<=768 ? true: false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
               
                <Header/>
                {/* O melhor anúncio */}
                <div className="the-best-ad">
                    < motion.div
                     initial={{left:mobile? "165px": '238'}}
                     whileInView={{left:'8px'}}      
                     transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Titulo de heroi*/}
                <div className="hero-text">
                 <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                 </div>
                 <div>
                    <span>Ideal body</span>
                 </div>
                 <div>
                   <span> In here we will help to shape and build you ideal body and live up your life to fullest</span>
                 </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCouter end={140} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                        <NumberCouter end={978} start={800} delay='4' preFix="+"/>
                        </span> 
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCouter end={50} start={0} delay='4' preFix="+"/>
                        </span> 
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Botões de herói */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div 
                initial={{right:"-1rem"}}
                whileInView={{right:"4rem"}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span> 
                    <span>116 ppm</span>
                </motion.div>
                {/* hero imagem */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back"/>

                {/*calorias*/}
                <motion.div 
                 initial={{right:"30rem"}}
                 whileInView={{right:"22rem"}}
                 transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero