import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <Grid container spacing={3} alignItems="center" >
         <Grid item xs={12} sm={4} >
            <div className="profile-div">
            <img className="profile-pic"  src={profilepic} alt="Saptarshi Sengupta Profile Pic" />
            </div>
         </Grid>
         <Grid item xs={12} sm={8} >
            <h2>About Me</h2>
            <p>{bio}</p>
            <Grid item xs={12} sm={7}  container>
               <Grid item md={7} sm={12} xs={12}>
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city}, {state}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </Grid>
               <Grid item md={5} sm={12} xs={12} className="download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </Grid>
            </Grid>
         </Grid>
      </Grid>

   </section>
    );
  }
}

export default About;
