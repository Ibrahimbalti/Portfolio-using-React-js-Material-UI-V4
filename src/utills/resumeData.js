import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import admin1 from '../assets/projectimages/reactjs/admin1.jpg'
import admin2 from '../assets/projectimages/reactjs/admin2.jpg'
import githubfinder1 from '../assets/projectimages/reactjs/githubfinder1.jpg'
import githubfinder2 from '../assets/projectimages/reactjs/githubfinder2.jpg'
import pokemon1 from '../assets/projectimages/reactjs/pokemon1.jpg'
import pokemon2 from '../assets/projectimages/reactjs/pokemon2.jpg'

import autoplayer from '../assets/projectimages/javascript/autoplayer.jpg'
import domarraymethods from '../assets/projectimages/javascript/domarraymethods.jpg'
import exchangerate from '../assets/projectimages/javascript/exchangerate.jpg'
import fasttypegame from '../assets/projectimages/javascript/fasttypegame.jpg'
import hangman from '../assets/projectimages/javascript/hangman.jpg'
import landingpage1 from '../assets/projectimages/javascript/landingpage1.jpg'
import landingpage2 from '../assets/projectimages/javascript/landingpage2.jpg'
import seatselection from '../assets/projectimages/javascript/seatselection.jpg'
import videoplayer from '../assets/projectimages/javascript/videoplayer.jpg'
import formvalidation from '../assets/projectimages/javascript/formvalidation.JPG'
import VisibilityIcon from '@mui/icons-material/Visibility';


export default {
    name:"Muhammad Ibrahim",
    title:"Full Stack developer",
    birthday:"4th December 1998",
    email:"ibrahimraju347@gmail.com",
    address:"Skardu",
    phone:"+92 3480578347",
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
    about:"Hi, I'm a full stack developer based out of Skardu(Pakistan) with MEAN stack development experience for over 1 years. \n I have maintained, developed and launched multiple projects.\n\nI am driven by my passion for coding and web development. And this never restricts me to a single language or tool. I am always trying out/learning new languages and tools that facilitate better development. And that passion has driven me to start multiple small projects in my free time.",
    experience:[
        {
            title:"Zohrajabeen",
            date:"12/2021 To 01/2022",
            description:"Develop new web applications as identified by management using React js, Node js, Express js, MongoDB and Css, Materail ui.\n\nThis application provides the services of a cloths of all over pakistan.Maintain existing database-driven web interfaces for rapid file transfer and data communication using Mongo DB Design and create optimized landing pages in HTML5 and CSS to support company's marketing and promotional needs which includes"
        },
        
    ],

    education:[
        {
            title:"Software engineering",
            date:"08/2021",
            description:"COMSATS Institute of Information Technology"
        },
        {
            title:"ICS",
            date:"12/2017",
            description:"Uswa public school and college Skardu"
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
    ],
    projects:[
        {
            tag:"React js",
            images:[admin1 ,admin2],
            image:admin1,
            title:"Admin Panel",
            caption:"",
            description:"This admin panel  purpose to maintain new posts, categories,pages, notification, links and visitors.The admin panel is fully responsive and  consist \n of  many components like Dashborad ,Blog post ,Link,Notification and Logout.This project use the following things:\n1.React js \n2.Materail ui \n3.Prop drilling \n3.Axios \n4.Vs code",
            links:[
               
                {
                    link:" https://admin-panel-a8dc8.web.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Admin-Panel-using-React-js---Material",
                    icon:< GitHubIcon/>
                },
                
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },
        {
            tag:"React js",
            images:[githubfinder1,githubfinder2],
            image:githubfinder1,
            title:"GITHUD Finder",
            caption:"",
            description:"The purpose of the GITHUB FINDER project is to find the profile of Github users. When we find the Github user then we should visit the GitHub user \n profile and also can visit the repository of GitHub users. In this project, we manage the data of GitHub users using context API.\nThis project use the following Things as follow:\n1 REACT js to make the front end of the project\n2 CSS for custom styling",
            links:[
                {
                    link:"https://githubfinder-ccf89.web.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Github-Finder",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },
        {
            tag:"React js",
            images:[pokemon1 ,pokemon2],
            image:pokemon1,
            title:"Pokemon Game",
            caption:"",
            description:"This is  pokemon game type website .The focus on searching mechanism of website.We just type the name of game on seach bar then filter a game related \nof type on search bar.In this website use axios to get the  fake api of pokemon game.Material ui use for styling of website",
            links:[
                {
                    link:"https://pokemangame-c06b6.web.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Pokeman-Using-Material---React",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },
        {
            tag:"Javascript",
            images:[autoplayer],
            image:autoplayer,
            title:"Auto Player",
            caption:"",
            description:" ",
            links:[
                {
                    link:"https://funny-fairy-2cc2ca.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/Music%20player",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },

        {
            tag:"Javascript",
            images:[domarraymethods],
            image:domarraymethods,
            title:"Dom Array Methods",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://magical-swan-50afa4.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/DOM%20Arrays%20Methods",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },

        {
            tag:"Javascript",
            images:[exchangerate],
            image:exchangerate,
            title:"Calculating Exchange Rate",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://amazing-platypus-690ee1.netlify.app/",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/Calculating%20Exchange%20Rates",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },


        {
            tag:"Javascript",
            images:[fasttypegame],
            image:fasttypegame,
            title:"Fast Type Game",
            caption:"",
            description:" ",
            links:[
                {
                    link:"https://startling-cocada-49abc3.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/Fast%20Typing%20Game",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },


        {
            tag:"Javascript",
            images:[hangman],
            image:hangman,
            title:"Hangame",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://nimble-souffle-ef1d99.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/Classic%20Hangman%20Game",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },

        {
            tag:"Javascript",
            images:[landingpage1,landingpage2],
            image:landingpage1,
            title:"Web Landing Page",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://bright-raindrop-5b44b9.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/Landing%20Page%20with%20Sliding%20Menu%20and%20Modal%20Window",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },

        {
            tag:"Javascript",
            images:[seatselection],
            image:seatselection,
            title:"Seat Selection",
            caption:"",
            description:" ",
            links:[
                {
                    link:"https://animated-sunshine-a951e2.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/selected%20movie%20theater%20seat",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },

        {
            tag:"Javascript",
            images:[videoplayer],
            image:videoplayer,
            title:"Video Player",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                    icon:< GitHubIcon/>
                }
                ,{
                    link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                    icon:< GitHubIcon/>
                }
            ]
        },

        {
            tag:"Javascript",
            images:[formvalidation],
            image:formvalidation,
            title:"Form Validation",
            caption:"",
            description:"",
            links:[
                {
                    link:"https://golden-malasada-44152f.netlify.app",
                    icon:< VisibilityIcon />
                },
                {
                    link:"https://github.com/Ibrahimbalti/Projects-2021/tree/main/HTML%20form%20volidation",
                    icon:< GitHubIcon/>
                }
                // ,{
                //     link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
                //     icon:< GitHubIcon/>
                // }
            ]
        },
        // {
        //     tag:"Mern Stack",
        //     images:["https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
        //     "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"],
        //     image:"https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
        //     title:"Project 2",
        //     caption:"Short Description",
        //     description:" This is my first project Now",
        //     links:[
        //         {
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         },
        //         {
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         }
        //         ,{
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         }
        //     ]
        // },
        // {
        //     tag:"Java",
        //     images:["https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
        //     "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"],
        //     image:"https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
        //     title:"Project 7",
        //     caption:"Short Description",
        //     description:" This is my first project Now",
        //     links:[
        //         {
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         },
        //         {
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         }
        //         ,{
        //             link:"https://www.linkedin.com/in/muhammad-ibrahim-6a8ab119a/",
        //             icon:< GitHubIcon/>
        //         }
        //     ]
        // },
    ]
}