import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
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
    },
    about:"Knowledgeable Web Developer brings superior front- and back-end design to promote organization-specific website presence. Thorough comprehension of complex HTML, CSS JavaScript MERN Stack programming languages to generate custom webpage design. Extensive collaboration with MERN Stack to ascertain company expectations and oversee site creation, from initial planning through rollout and support. \n\nDetail-oriented approach to maintaining website responsiveness, effectiveness and security. Logical and results.driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives.",
    experience:[
        {
            title:"exprienc 1",
            date:"3333",
            description:"Good buy"
        },
        {
            title:"exprienc 1",
            date:"3333",
            description:"Good buy"
        },
        {
            title:"exprienc 1",
            date:"3333",
            description:"Good buy"
        },
    ],

    education:[
        {
            title:"education 1",
            date:"3333",
            description:"Good buy"
        },
        {
            title:"education 1",
            date:"3333",
            description:"Good buy"
        },
        {
            title:"education 1",
            date:"3333",
            description:"Good buy"
        },
    ],

    services:[
        {
            title:"Web Development",
            description:"Good buy",
            icon:<WebOutlinedIcon/>
        },
        {
            title:"FrontEnd",
            description:"Good buy",
            icon:<AssignmentIndOutlinedIcon/>
        },
        {
            title:"Full Stack",
            description:"Good buy",
            icon:<WebOutlinedIcon/>
        },
    ],
    skill:[
        {
            title:"FRONT-END",
            describe:[
                "ReactJS",
                "JavaScript",
                "Material Ui",
                "CSS",
                "HTML",
                "Bootstrap"
            ]
        },
        {
            title:"BACK-END",
            describe:[
                "NodeJS",
                "ExpressJS",
            ]
        },
        {
            title:"DATABASE",
            describe:[
                "MongoDB",
            ]
        },
        {
            title:"SOURCE-CONTROL",
            describe:[
                "Git",
                "GitHub",
                "Jira",
            ]
        },
    ]
}