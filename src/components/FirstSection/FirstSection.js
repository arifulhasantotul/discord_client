import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../images/chat.svg";
import "./FirstSection.css";

const FirstSection = () => {
   return (
      <Container maxWidth="xl" className="first_sec">
         <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ justifyContent: "center" }}>
               <Grid item xs={12} md={6} className="left_div">
                  <img src={Img} alt="" />
               </Grid>
               <Grid item xs={12} md={4} className="right_div">
                  <h1>Create an invite-only place where you belong</h1>
                  <p>
                     Discord servers are organized into topic-based channels
                     where you can collaborate, share, and just talk about your
                     day without clogging up a group chat.
                  </p>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default FirstSection;
