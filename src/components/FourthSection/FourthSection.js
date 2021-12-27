import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../images/chat4.svg";
import "./FourthSection.css";

const FourthSection = () => {
   return (
      <>
         <Container maxWidth="xl" className="fourth_sec">
            <Box sx={{ flexGrow: 1 }}>
               <Grid container sx={{ justifyContent: "center" }}>
                  <Grid item xs={11} md={9} className="right_div">
                     <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                     <p>
                        Low-latency voice and video feels like you're in the
                        same room. Wave hello over video, watch friends stream
                        their games, or gather up and have a drawing session
                        with screen share.
                     </p>
                  </Grid>
                  <Grid item xs={11} md={10} className="left_div">
                     <img src={Img} alt="" />
                  </Grid>
               </Grid>
            </Box>
         </Container>
         <Container maxWidth="xl" className="button_sec">
            <Box sx={{ flexGrow: 1 }}>
               <Grid container sx={{ justifyContent: "center" }}>
                  <Grid item xs={11} md={5} className="right_div">
                     <h1>Ready to start your journey?</h1>
                     <button className="btn">Explore</button>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </>
   );
};

export default FourthSection;
