import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Img from "../../images/chat3.svg";

const ThirdSection = () => {
   return (
      <Container maxWidth="xl" className="first_sec">
         <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ justifyContent: "center" }}>
               <Grid item xs={12} md={6} className="left_div">
                  <img src={Img} alt="" />
               </Grid>
               <Grid item xs={12} md={4} className="right_div">
                  <h1>From few to a fandom</h1>
                  <p>
                     Get any community running with moderation tools and custom
                     member access. Give members special powers, set up private
                     channels, and more.
                  </p>
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};

export default ThirdSection;
