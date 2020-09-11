import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography'

function Portfolio(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  if(props.data){
    var projects = props.data.projects.map(function(projects){
      var projectImage = 'images/portfolio/'+projects.image;
      return (
        <Grid item md={6} sm={12}  key={projects.title} className="portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h4>{projects.title}</h4>
                    <h6>{projects.category}</h6>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          {matches && 
            <Typography variant="h4" color="dark" gutterBottom>
              {projects.title}
            </Typography>
          }
        </Grid>
      )
    })
  }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <Grid container spacing={3}> 
                {projects}
            </Grid>
          </div>
      </div>
   </section>
    );
}

export default Portfolio;
