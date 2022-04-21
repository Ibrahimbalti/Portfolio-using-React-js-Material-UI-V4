import React from "react";
import {Container,Grid} from '@material-ui/core'
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Container>
      <Grid Container>
        <Grid item xs={12} sm={6} md={4} lg={3} style={{backgroundColor:"red"}}>
            <Profile/>
        </Grid>

        <Grid  item xs={12} sm={6} md={8} lg={9} style={{backgroundColor:"green"}}>
          <Header/>
          <Routes>
          <Route exact path="/portfolio" element={ <Portfolio/>} />
          <Route exact path="/resume" element={ <Resume />} />
          </Routes>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
