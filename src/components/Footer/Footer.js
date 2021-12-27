import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <Container
         maxWidth="xl"
         className="fourth_sec"
         sx={{ background: "var(--dark)" }}
      >
         <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ justifyContent: "center" }}>
               <Grid item xs={11} md={6} lg={3} className="first_div">
                  <h3>About us</h3>
                  <p>
                     We are a full-service best travel agency in Cumilla,
                     Bangladesh with a dedicated team of highly skilled and
                     experienced people to assist our valuable clients according
                     to their goals and desired journeys all over the world. We
                     at Adventure travels and tours strive our best to deliver
                     the outstanding service to all our customers.
                  </p>
               </Grid>

               <Grid item xs={11} md={6} lg={3} className="second_div">
                  <h3>Branch location</h3>
                  <li>India</li>
                  <li>Bangladesh</li>
                  <li>Japan</li>
                  <li>USA</li>
                  <li>France</li>
               </Grid>

               <Grid item xs={11} md={6} lg={3} className="third_div">
                  <h3>Quick links</h3>
                  <li>Home</li>
                  <li>Packages</li>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>Review</li>
                  <li>Contact</li>
               </Grid>

               <Grid item xs={11} md={6} lg={3} className="four_div">
                  <h3>Follow us</h3>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Linkedin</li>
               </Grid>
            </Grid>
         </Box>
         <article>
            <h1 className="credit">
               &copy; created by <span>md ariful hasan</span> | all right
               reserved.
            </h1>
         </article>
      </Container>
   );
};

export default Footer;
