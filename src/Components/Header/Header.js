import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,FormControl,Nav,Navbar,NavDropdown} from "react-bootstrap"
import {HomeRounded,SchoolRounded,WorkRounded,Facebook,Twitter,LinkedIn,GitHub,Telegram} from '@material-ui/icons';
import {Link,NavLink,withRouter} from "react-router-dom"
import resumeData from '../../utills/resumeData';
import CustomButton from '../Button/CustomButton';
import { useLocation } from 'react-router-dom';
import './Header.css'
const Header=(props)=> {
  const location = useLocation();
  // console.log(location.pathname);
  const pathName=location.pathname
  console.log(pathName)
 
  return (
    <Navbar expand='lg' sticky='stop' className='header'>
        <Nav.Link as={NavLink} to="/" className='nav_link'>
          <Navbar.Brand className='header_home'>
            <HomeRounded/>
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className='header_left'>
            {/* Resume Link */}
            <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header_link_active':'header_link'}>
              Resume
            </Nav.Link>

             {/* Portfolio Link */}
             <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active':'header_link'}>
              Portfolio
            </Nav.Link>
            </Nav>
            <div className='header_right'>
            {Object.keys(resumeData.social).map((key,i)=>(
                <a href={resumeData.social[key].link} key={i} target='_blank'>{resumeData.social[key].icon}</a>
              ))}
              < CustomButton text='Hire Me' icon={<Telegram/>}/>
            </div>
          
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header