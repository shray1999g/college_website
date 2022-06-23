import '../Global.css'
import Home from "../Pages/Home";
import Courses from "../Pages/Courses"
import Placement from "../Pages/Placement"
import Alumni from "../Pages/Alumni"
// import Professor from "../Pages/Professor"
import Contact from "../Pages/Contact"
import Departments from '../Pages/Departments'
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from 'react'

export default function PageContainer() {

  const {pathname, hash, key} = useLocation()

  useEffect(()=>{
    if(hash === ''){
      let scrollabePage = document.getElementById('AppBody')
      scrollabePage.scrollTop = 0
    }
    else{
      let scrollabePage = document.getElementById('appBody')
      const id = hash.replace('#','')
      const element = document.getElementById(id)
      console.log(window.innerHeight);
      if (element){
        scrollabePage.scrollTop = 0
        scrollabePage.scrollTop = element.getBoundingClientRect().top-30;
      }
    }
  },[pathname, hash, key])

  return (
    <div>
      <div className='pageContainer'>
            <Routes>
                {/* set up routes to all pages */}
                <Route path="/home" element={<Home />}></Route>
                <Route path="/courses" element={<Courses />}></Route>
                <Route path="/placement" element={<Placement />}></Route>
                <Route path="/alumni" element={<Alumni />}></Route>
                {/* <Route path="/professors" element={<Professor />}></Route> */}
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/departments" element={<Departments />}></Route>
                {/* root redirects to home page */}
                <Route path="/" element={<Navigate to='/home' replace />}></Route>
                {/* to all the invalid routes, redirect to home */}
                <Route path="*" element={<Navigate to='/home' replace />}></Route>
            </Routes>
        </div>
    </div>
  )
}
