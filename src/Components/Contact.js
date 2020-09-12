import React from 'react';

export default class MyForm extends React.Component {
   constructor(props) {
     super(props);
     this.submitForm = this.submitForm.bind(this);
     this.state = {
       status: ""
     };
   }


   render() {
      const { status } = this.state;
      if(this.props.data){
         var name = this.props.data.name;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var phone= this.props.data.phone;
       }
    

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                     <p className="lead">{this.data?.message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form 
                     onSubmit={this.submitForm}
                     action="https://formspree.io/xeqpjqzg"
                     method="POST"
                     id="contactForm" 
                     name="contactForm">
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input name="name" type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input name="email" type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input name="subject" type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea name="message" cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        {status === "SUCCESS" ? 
                           <div id="message-success">
                              <i className="fa fa-check"></i><p>Your message was sent, thank you!</p><br />
                           </div> : 
                           <button type='submit' className="submit">Submit</button>}
                        {status === "ERROR" && <div id="message-warning"><p>Ooops! There was an error.</p></div>}
                     </div>
                  </fieldset>
               </form>      
            </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {city}, {state} <br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">

                  </div>
               </aside>
         </div>
      </section>
      );
   }

   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
   }
}

