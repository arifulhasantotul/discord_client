import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <section className="container-fluid footer">
         <div className="footer_wrapper">
            {/* About us  */}
            <article className="box">
               <h3>About us</h3>
               <p>
                  We are a full-service best travel agency in Cumilla,
                  Bangladesh with a dedicated team of highly skilled and
                  experienced people to assist our valuable clients according to
                  their goals and desired journeys all over the world. We at
                  Adventure travels and tours strive our best to deliver the
                  outstanding service to all our customers.
               </p>
            </article>

            <article className="box">
               <h3>Branch location</h3>
               <li>India</li>
               <li>Bangladesh</li>
               <li>Japan</li>
               <li>USA</li>
               <li>France</li>
            </article>

            <article className="box">
               <h3>Quick links</h3>
               <li>Home</li>
               <li>Packages</li>
               <li>Services</li>
               <li>Gallery</li>
               <li>Review</li>
               <li>Contact</li>
            </article>

            <article className="box">
               <h3>Follow us</h3>
               <li>Facebook</li>
               <li>Instagram</li>
               <li>Twitter</li>
               <li>Linkedin</li>
            </article>
         </div>
         <article>
            <h1 className="credit">
               &copy; created by <span>md ariful hasan</span> | all right
               reserved.
            </h1>
         </article>
      </section>
   );
};

export default Footer;
