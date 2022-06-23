import '../Global.css'
import '../StyleSheets/Home.css'
import React, { useState } from 'react'
import importAll from "../middleware/dynamicImport.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from 'react-router-dom';

//function start for frame motion
const motionStyle = {
  container: (delayMultiplier, staggerMultiplier) => {
    return {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.1 * delayMultiplier,
          staggerChildren: 0.1 * staggerMultiplier
        }
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
}
//function end for frame motion


var key = 0
export default function Home(props) {
  
  const Images = importAll(require.context('../Images/HomeImg', false, /\.(png|jpe?g|svg)$/));

  //start of swiper slide
  const slides = []
  const numSlides = 9
  for (let i = 0; i < numSlides; i++) {
    slides.push(
      <SwiperSlide className='Slide' key={i} >
        <img className='SlideImage' src={Images[`Swiper_${i}.jpg`]} alt="SlideImg" />
      </SwiperSlide>
    )
  }
  //end of swiper slide


  //start of frame motion
  const [isPage2InView, setIsPage2InView] = useState(false)
  const [wasPage2InView, setWasPage2InView] = useState(false)

  const awards = [
    { rank: 'NAAC A++', caption: 'Score 3.61, NAAC 2021 Cycle 2' },
    { rank: '6th', caption: 'among the universities in India, NIRF 2021' },
    { rank: '438th', caption: 'among world\'s top 1300 universities, RUR 2021' },
    { rank: '601-800', caption: 'World University Ranking, THE 2022' }];

  const awardElement = []
  for (let award of awards) {
    awardElement.push(
      <motion.div variants={motionStyle.item} key={award.rank}>
        <div className="AchievementBG">
          <div className="AchievementContainer">
            <div className="AchievementHead">
              {award.rank}
            </div>
            <div className="AchievementContent">
              {award.caption}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
  // end of frame motion

  // start of count up
  const [isPage3InView, setIsPage3InView] = useState(false);

  const counters = [
    { count: 18, title: 'Years Of Experience', suffix: true, duration: 2.0, delay: 0.1 },
    { count: 100, title: 'Faculties Members', suffix: true, duration: 2.0, delay: 0.1 },
    { count: 2000, title: 'Students', suffix: true, duration: 2.0, delay: 0.1 },
    { count: 5000, title: 'Alumni', suffix: true, duration: 2.0, delay: 0.1 },
  ];

  const countElement = []
  for (let i = 0; i < counters.length; i++) {
    let aCounter = counters[i]
    countElement.push(
      <div key={aCounter.title}>
        <div className="ThirdSectionContainer">
          <div className="CountValue">
            {isPage3InView ? <CountUp start={0} end={aCounter.count} suffix={aCounter.suffix ? '+' : ''} delay={0.1} duration={2.0} /> : 0}
          </div>
          <div className="CountName">{aCounter.title}</div>
        </div>
      </div>
    )
    if (i !== counters.length - 1) {
      countElement.push(
        <div key={i} className="CountBorder"></div>
      )
    }
  }
  // end of count up

  //start of dashboard
  const [isPage4InView, setIsPage4InView] = useState(false);
  const [WasPage4InView, setWasPage4InView] = useState(false);

  const dashboardItems = [
    // { title: "Professors' Profiles", link: "/professors", icon: "teacher.png" },
    { title: "Curriculum", link: "/courses#curriculum", icon: "curriculum.png" },
    { title: "Alumni' Profiles", link: "/alumni", icon: "student.png" },
    { title: "Placement", link: "/placement", icon: "placement.png" },
    { title: "Message Section", link: "/about#MessageSection", icon: "message.png" },
    { title: "Contributors' Profiles", link: "/placement#contributors", icon: "contributors.png" },
    { title: "Contact Us", link: "/contact", icon: "contact.png" },
    { title: "About KEC", link: "/about", icon: "about.png" },
  ]

  const dashboardElements = []
  for (let item of dashboardItems) {
    dashboardElements.push(
      <Link to={item.link} key={item.title} style={{ textDecoration: 'none' }}>
        <motion.div className="DashboardItem" variants={motionStyle.item}>
          <img src={Images[item.icon]} alt="" />
          <h1>{item.title}</h1>
          <h2>Click to see More</h2>
        </motion.div>
      </Link>
    )
  }
  //end of dashboard 


  return (
    <div className='Home' id='Home'>
      <div className="HomeSection FirstSection">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          pagination={{ dynamicBullets: true, disableOnInteraction: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="SlideHolder"
        >
          {slides}
        </Swiper>
        <div className="WelcomeContainer" >
          <div className="KecLogo" ></div>
          <h1>Krishna Engineering College</h1>
          <h2>Abdul Kalam Technical University</h2>
        </div>
      </div>
      <div className="HomeSection SecondSection">
        <div className="SecondSectionContainer">
          <motion.div
            key={wasPage2InView ^ isPage2InView ? ++key : key}
            className="SubContainer"
            variants={motionStyle.container(0.2, 2.5)}
            initial="hidden"
            animate={isPage2InView ? 'visible' : 'hidden'}
            onViewportEnter={(enter) => { setWasPage2InView(isPage2InView); setIsPage2InView(true) }}
            onViewportLeave={(enter) => { setWasPage2InView(isPage2InView); setIsPage2InView(false) }}
          >
            {awardElement}
          </motion.div>
        </div>
        <div className="SecondSectionContainer">
          <div className="SubContainer">
            <div>
              <div className="AboutTextHead">About Krishna Engineering College</div>
              <div className="AboutTextContent">
              Krishna Engineering College (KEC, Ghaziabad) was established in 2004 by Friends Charitable Society (FCS) Ghaziabad. FCS has eminent Businessmen, Industrialists and Professionals as its members. FCS members are also associated with other leading Educational Institutions in NCR and other region of UP like KIET Group of Institution (Ghaziabad), Inderprastha Engineering College (IPEC). KEC has been established as an institution for the millennium with a vision to turn out scholars who will be Global Players when they leave the portals of KEC. With this vision in the background, the college endeavours to impart core technical knowledge, help students develop requisite soft skills, instil an adaptability for change and builds cross cultural compatibility to its students. The college is approved by AICTE (Ministry of HRD, Government of India) and is affiliated to AKTU, Lucknow. Starting with four programmes in B.Tech.,the college currently offers five programmes in B.Tech.(Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering and Civil Engineering) with an approved intake of 600 students/year. Within a span of 18 years, the college has established its credentials as an institution of repute by figuring among top 20 colleges of over 400 Engineering & Technology Institutions of AKTU in session 2016-17. The college infrastructure is a planned endeavour built over a period with care and concern keeping all the needs of a premier Engineering Institution.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HomeSection ThirdSection">
        <motion.div
          className='ThirdSectionMotion'
          onViewportEnter={(entry) => setIsPage3InView(true)}
          onViewportLeave={(entry) => setIsPage3InView(false)}
        >
          {countElement}
        </motion.div>
      </div>
      <div className="HomeSection FourthSection">
        <div className="heading-container">
          <h1>Dashboard</h1>
          <div className="heading-border"></div>
        </div>
        <div className="DashboardBody">
          <motion.div
            className="DashboardRow"
            variants={motionStyle.container(1, 2)}
            initial="hidden"
            animate={isPage4InView ? 'visible' : 'hidden'}
            onViewportEnter={(entry) => { setWasPage4InView(isPage4InView); setIsPage4InView(true) }}
            onViewportLeave={(entry) => { setWasPage4InView(isPage4InView); setIsPage4InView(false) }}
          >
            {dashboardElements}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
