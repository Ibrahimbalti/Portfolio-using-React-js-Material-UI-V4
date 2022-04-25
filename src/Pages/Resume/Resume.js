import React from 'react'
import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import './resume.css'
import resumeData from '../../utills/resumeData'
import {CustomizeTimeline,CustomizeTimelineSeparator} from '../../Components/Timeline/CustomizeTimeline'
import WorkIcon from '@material-ui/icons/Work';
import { TimelineContent, TimelineDot, TimelineItem } from '@material-ui/lab'
import SchoolIcon from '@material-ui/icons/School';

const Resume=()=>{
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='about_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and exprience */}
      <Grid container className='section  pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>
        <Grid item xs={12} >
          <Grid container className='resumeTimeline'>
            {/* Experience*/}
            <Grid item sm={12} md={6}>
              <CustomizeTimeline title='Work Experience' icon={<WorkIcon/>} >
              {resumeData.experience.map((exprience)=>(
                <TimelineItem >
                    <CustomizeTimelineSeparator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{exprience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{exprience.date}</Typography>
                      <Typography variant="body2" className='timeline_description'>{exprience.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
              ))}
              </CustomizeTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomizeTimeline title='Education Detail' icon={<SchoolIcon />} >
              {resumeData.education.map((education)=>(
                <TimelineItem >
                    <CustomizeTimelineSeparator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                      <Typography variant="body2" className='timeline_description'>{education.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
              ))}
              </CustomizeTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className='section  pb_45'>
      <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Services</h6>
        </Grid>

        <Grid item xs={12} >
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((services)=>(
              <Grid item xs={12} sm={6} md={3}>
                <div className='services'>
                  <Icon className='services_icon'>{services.icon}</Icon>
                  <Typography className='services_title' variant='h6'>{services.title}</Typography>
                  <Typography className='services_description'variant='body2' >{services.description}</Typography>
                </div>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skill */}
      <Grid container className='section graybg pb_45 p_50' >
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-between" >
          {resumeData.skill.map((skill)=>(
        <Grid item xs={12} sm={6} md={3} >
          <Paper elevation={0} className='skill'>
            <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
            {skill.describe.map((des)=>(
              <Typography variant='body2' className='skill_description'>
                <TimelineDot className='timeline_dot'/>
                {des}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}
          </Grid>
        </Grid>
     
      </Grid>

      {/* Contact */}
      <Grid container>

      </Grid>
    </>
  )
}

export default Resume