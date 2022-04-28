import React, { useState} from 'react'
import './portfolio.css'
import { CardActionArea,  CardContent, CardMedia, Dialog, Grid,Grow,Tab, Tabs, Typography,Card } from '@material-ui/core'
import resumeData from '../../utills/resumeData'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
import ImageGallery from '../../Components/imageGallery/ImageGallery'
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
          <Tabs value={tabvalue} indicatorColor="primary" className='customTab' onChange={(even,newValue)=>setTabvalue(newValue)}>
            <Tab label="All" value="All" className={tabvalue === 'All' ? ('customTabs_item active'):('customTabs_item')}/>
            {[...new Set(resumeData.projects.map((item)=>item.tag))].map((tag,i)=>(
              <Tab key={i} label={tag} value={tag} className={tabvalue === tag ? ('customTabs_item  active'):('customTabs_item')} />
            ))}
          </Tabs>
        </Grid>
        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={3} >
{resumeData.projects.map((project,i)=>(
  <>
  {tabvalue == project.tag || tabvalue == "All" ? (
    <Grid item xs={12} sm={6} md={4} key={i}  >
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
        <Dialog open={projectsDialog} onClose={()=>setProejctDialog(false)} className='projectDialog' maxWidth="lg" fullWidth >
        <DialogTitle onClose={()=>setProejctDialog(false)}>{projectsDialog.title}</DialogTitle>
        <DialogContent projectDialog_description style={{height:'80vh'}}>
          {projectsDialog.images && (
              <ImageGallery images={projectsDialog.images}/>
          )}

          <Typography className='projectDialog_description' >
          {projectsDialog.description}
          </Typography>
         
        </DialogContent>
        <DialogActions className='projectDialog_icon'>
         {projectsDialog?.links?.map((link,i)=>(
           <a href={link.link} target='_blank' className='projectDialog_icon' key={i}>{link.icon}</a>
         ))}
        </DialogActions>
    </Dialog>
      </Grid>
    </>
  )
}

export default Portfolio