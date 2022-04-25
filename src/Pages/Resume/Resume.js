import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './resume.css'
import resumeData from '../../utills/resumeData'
import {CustomizeTimeline,CustomizeTimelineSeparator} from '../../Components/Timeline/CustomizeTimeline'
import WorkIcon from '@material-ui/icons/Work';
import { TimelineContent, TimelineItem } from '@material-ui/lab'
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
      <Grid container>
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
      <Grid container>

      </Grid>

      {/* Skill */}
      <Grid container>

      </Grid>

      {/* Contact */}
      <Grid container>

      </Grid>
    </>
  )
}

export default Resume