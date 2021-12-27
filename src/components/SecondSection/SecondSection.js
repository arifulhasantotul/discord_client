import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../images/chat2.svg";
import "./SecondSection.css";

const SecondSection = () => {
   return (
      <Container maxWidth="xl" className="second_sec">
         <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ justifyContent: "center" }}>
               <Grid item xs={12} md={4} className="right_div">
                  <h1>Where hanging out is easy</h1>
                  <p>
                     Grab a seat in a voice channel when you’re free. Friends in
                     your server can see you’re around and instantly pop in to
                     talk without having to call.
                  </p>
               </Grid>
               <Grid item xs={12} md={6} className="left_div">
                  <img src={Img} alt="" />
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default SecondSection;
