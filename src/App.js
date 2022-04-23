import React from "react";
import { Container, Grid } from '@material-ui/core'
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Profile />
        </Grid>

        <Grid item xs={12} sm={6} md={8} lg={9}>
        <Header />
          <Routes>
          {/* <Route exact path="/" element={<Header />} /> */}
          <Route exact path="/" element={<Resume />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            
          </Routes>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
