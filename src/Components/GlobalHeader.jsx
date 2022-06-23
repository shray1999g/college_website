import React, { useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../StyleSheets/GlobalHeader.css'
import '../Global.css'
import { useLocation } from 'react-router-dom';


export default function GlobalHeader(props) {
    const navRef = useRef(null)
    const windowLocation = useLocation()
    const [activeTab, setActiveTab] = useState(0)

    useEffect(()=>{
        setActiveTab(windowLocation.pathname)
    }, [windowLocation])

    useEffect(()=>{
        
    }, [props.shouldCollapse]);

    const PageRoutes = {
        'Home': '/home',
        'Courses':'/courses',
        'Placement' : '/placement',
        'Alumni' : '/alumni',
        // 'Professors' : '/professors',
        'Contact Us': '/contact',
        'Departments': '/departments'
    }

    const pageRoutButtons = []
    for(let pageLink in PageRoutes){
        pageRoutButtons.push(
            <Link to= {PageRoutes[pageLink]} key={pageLink} className='NavLink' aria-selected = {PageRoutes[pageLink].match(activeTab) ? true : false} > {pageLink} </Link>
        )
    }

  return (
    <div className='Header'>
        <div className={props.shouldCollaps? 'HeaderBody CollapseHeader' : 'HeaderBody'}>
        <Link to='/home' className='HeaderChild'>
            <div className='HeaderLogo'></div>
            <div className='HeaderText'>Krishna <br/> Engineering College</div>
        </Link>
        <div className="NavBar HeaderChild DepartmentMargin" ref={navRef}>
            {pageRoutButtons}
        <div className="Pill"></div>
                
            </div>
        </div>
      
    </div>
  )
}
