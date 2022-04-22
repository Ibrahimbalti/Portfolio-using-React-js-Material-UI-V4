import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
export default {
    name:"Muhammad Ibrahim",
    title:"Full Stack developer",
    birthday:"4th December 1998",
    email:"ibrahimraju347@gmail.com",
    address:"Skardu",
    phone:"+92 03480578347",
    social: {
        Facebook:{
            link:"https://www.facebook.com/profile.php?id=100022000658130",
            text:"Muhammad Ibrahim",
            icon:<FacebookIcon/>
        },
        Twitter:{
            link:"https://twitter.com/LearnTeach12",
            text:"Twitter",
            icon:<TwitterIcon/>
        },
        LinkedIn:{
            link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
            text:"MyLinkedIn",
            icon:<LinkedInIcon/>
        },
        Github:{
            link:"https://github.com/Ibrahimbalti",
            text:"MyGithub",
            icon:< GitHubIcon/>
        },
    }
}