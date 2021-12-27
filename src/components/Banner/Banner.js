import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner01 from "../../images/banner1.1.svg";
import banner02 from "../../images/banner2.1.svg";
import "./Banner.css";

const Banner = () => {
   return (
      <Container maxWidth="xl" className="banner">
         <Box sx={{ flexGrow: 1 }}>
            <Grid container>
               <Grid item xs={2} md={3} className="left_div">
                  <img src={banner01} alt="banner" />
               </Grid>
               <Grid item xs={12} md={6} className="center_div">
                  <h1>IMAGINE A PLACE...</h1>
                  <p>
                     ...where you can belong to a school club, a gaming group,
                     or a worldwide art community. Where just you and a handful
                     of friends can spend time together. A place that makes it
                     easy to talk every day and hang out more often.
                  </p>
                  <button className="btn">Explore</button>
               </Grid>
               <Grid item xs={12} md={3} className="right_div">
                  <img src={banner02} alt="banner" />
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default Banner;
