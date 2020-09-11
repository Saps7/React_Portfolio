import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var languagemessage = this.props.data.languagemessage;
      var languages = this.props.data.languages.map(function(languages){
        var className = 'bar-expand '+languages.name.toLowerCase();
        return <li key={languages.name}><span style={{width:languages.level}}className={className}></span><em>{languages.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>My Skills</span></h1>
          </div>

          <div className="nine columns main-col">

              <h3>{skillmessage}
              </h3>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
        </div>

        <div className="nine columns main-col">

          <h3>{languagemessage}</h3>

          <div className="bars">
            <ul className="skills">
            {languages}
            </ul>
          </div>
        </div>

      </div>

      
   </section>
    );
  }
}

export default Resume;
