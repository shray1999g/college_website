import React from 'react'
import "../StyleSheets/Courses.css"
import "../Global.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import importAll from "../middleware/dynamicImport"
import durationIco from "../Images/CoursesImg/hourglass.png"
import typeIco from "../Images/CoursesImg/full-time-job.png"
import specializationIco from "../Images/CoursesImg/graduation-cap.png"
import courseData from "../Data/Courses.json"

export default function Courses() {

  const images = importAll(require.context("../Images/CoursesImg", false, /\.(png|jpe?g|svg)$/))

  const coursesElements = []
  const curriculumElements = [];
  for (let course in courseData) {
    coursesElements.push(
      <div className="CourseContainer" key={courseData[course].FullName} >
        <img className='CourseImage' src={images[courseData[course].Image]} alt="mca class" />
        <div className="CourseInfo">
          <div className="CourseHead">{courseData[course].FullName}</div>
          <div className="CourseDetails">{courseData[course].Summary}</div>
        </div>
        <div className="CourseCaption">
          <div className="CaptionItem">
            <img src={durationIco} alt="duration" className="CaptionItemIcon" />
            <h4>{courseData[course].Duration}</h4>
          </div>
          <div className="CaptionItem">
            <img src={typeIco} alt="duration" className="CaptionItemIcon" />
            <h4>{courseData[course].Type}</h4>
          </div>
          <div className="CaptionItem">
            <img src={specializationIco} alt="duration" className="CaptionItemIcon" />
            <h4>{courseData[course].Specialization}</h4>
          </div>
        </div>
      </div>
    )

    let syllabusElement = []
    for (let syllabus of courseData[course]['Syllabus']) {

      let subjectsElements = []
      for (let subject of syllabus.Structure) {
        let subjectName = subject.Courses.map(courseName => <h3 key={courseName}> - {courseName}</h3>)
        subjectsElements.push(
          <div className="SemesterContent" key={subject.Category} >
            <h2>{subject.Category}</h2>
            {subjectName}
          </div>
        )
      }

      syllabusElement.push(
        <SwiperSlide className="CourseSlideContainer" key={syllabus.Name}>
          <div className="SemesterHead">{syllabus.Name}</div>
          {subjectsElements}
        </SwiperSlide>
      )
    }

    
    curriculumElements.push(
      <div key={course}>
        <div className="subheading-container">
          <h2>{courseData[course].FullName}</h2>
          <div className="subheading-border"></div>
        </div>
        <div className="CurriculumContainer">
          <Swiper
            slidesPerView={"auto"}
            navigation={true}
            pagination={{ dynamicBullets: true }}
            modules={[Pagination, Navigation]}
            className="CourseSlideHolder"
          >
            {syllabusElement}
          </Swiper>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div id="CoursePage" className="CoursePageSection">
        <div className="heading-container">
          <h1>Masters Programmes</h1>
          <div className="heading-border"></div>
        </div>
        <div className="CoursesList">
          {coursesElements}
        </div>
      </div>
      <div className="CoursePageSection">
        <div id='curriculum' className="heading-container">
          <h1>Curriculum</h1>
          <div className="heading-border"></div>
        </div>
        <div className="CurriculumBody">
          {curriculumElements}
        </div>
      </div>
    </div>
  )
}