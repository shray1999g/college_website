import React, { useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../StyleSheets/GlobalHeader.css'
import '../Global.css'
import { useLocation } from 'react-router-dom';
import navOpenIco from '../Images/Core/navOpen.png'
import navCloseIco from '../Images/Core/navClose.png'


export default function GlobalHeader(props) {
    const navRef = useRef(null)
    const windowLocation = useLocation()
    const [activeTab, setActiveTab] = useState(0)
    const drawerRef = useRef(null);
    const hiddenAreaRef = useRef(null);
    let isDrawerOpen = false;

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

    //mobile view code starts
    function toogleNav(){
        if (!isDrawerOpen) {
            drawerRef.current.src = navCloseIco;
            hiddenAreaRef.current.style.display = 'block';
            navRef.current.className = 'NavBar HeaderChild openDrawer';
            isDrawerOpen = true;
        } else {
            drawerRef.current.src = navOpenIco;
            hiddenAreaRef.current.style.display = 'none';
            navRef.current.className = 'NavBar HeaderChild';
            isDrawerOpen = false;
        }
    }
    //mobile view code ends

  return (
    <div className='Header'>
        <div className={props.shouldCollaps? 'HeaderBody CollapseHeader' : 'HeaderBody'}>
            <div className="DrawerLogoContainer" onClick={toogleNav} ><img src={navOpenIco} alt="Open Drawer" ref={drawerRef} /></div>
        <Link to='/home' className='HeaderChild'>
            <div className='HeaderLogo'></div>
            <div className='HeaderText'>Krishna <br/> Engineering College</div>
        </Link>
        <div className="hideNav" ref={hiddenAreaRef} onClick={toogleNav}></div>
        <div className="NavBar HeaderChild" ref={navRef}>
            {pageRoutButtons}
        <div className="Pill"></div>
                
            </div>
        </div>
      
    </div>
  )
}
