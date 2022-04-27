import React, { useState } from 'react'
import './portfolio.css'
import { CardActionArea, CardActions, CardContent, CardMedia, Dialog, Grid,Grow,Tab, Tabs, Typography } from '@material-ui/core'
import resumeData from '../../utills/resumeData'
import { Card } from 'react-bootstrap'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
const Portfolio = () => {
  const [tabvalue,setTabvalue]=useState("All")
  const [projectsDialog,setProejctDialog]=useState(false)
 
  return (
    <>
      <Grid container spacing={1} className="section pb_45 pt_45">
        {/* Title */}
      <Grid item className='section_title mb_20'>
          <span></span>
          <h6 className='section_title_text'>Portfolio</h6>
        </Grid>

        {/* Tab */}
        <Grid item xs={12}>
          <Tabs value={tabvalue} indicatorColor="white" className='customTab' onChange={(even,newValue)=>setTabvalue(newValue)}>
            <Tab label="All" value="All" className={tabvalue === 'All' ? ('customTabs_item active'):('customTabs_item')}/>
            {[...new Set(resumeData.projects.map((item)=>item.tag))].map((tag)=>(
              <Tab label={tag} value={tag} className={tabvalue === tag ? ('customTabs_item  active'):('customTabs_item')} />
            ))}
          </Tabs>
        </Grid>
        {/* Projects */}
        <Grid xs={12}>
          <Grid container spacing={3} >
{resumeData.projects.map((project)=>(
  <>
  {tabvalue == project.tag || tabvalue == "All" ? (
    <Grid item xs={12} sm={6} md={4}  >
    <Grow in timeout={1000}>
    <Card className='customCard' onClick={()=>setProejctDialog(project)}>
      <CardActionArea>
        <CardMedia  className='customCard_image' image={project.image} title={project.title}  />
        <CardContent>
          <Typography variant='body2' className='customCard_title'>{project.title}</Typography>
          <Typography  variant='caption' className='customCard_caption'>{project.caption}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grow>
  </Grid>
  ):null}
  
  </>
  
))}
          </Grid>
        </Grid>
        {/* Dialog box */}
        <Dialog open={projectsDialog} onClose={()=>setProejctDialog(false)} className='projectDialog'>
        <DialogTitle onClose={()=>setProejctDialog(false)}>{projectsDialog.title}</DialogTitle>
        <img src={projectsDialog.image} alt='' className='projectDialog_image' />
        <DialogContent projectDialog_description className='projectDialog_description'>
         {projectsDialog.description}
        </DialogContent>
        <DialogActions className='projectDialog_icon'>
         {projectsDialog?.links?.map((link)=>(
           <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
         ))}
        </DialogActions>
    </Dialog>
      </Grid>
    </>
  )
}

export default Portfolio