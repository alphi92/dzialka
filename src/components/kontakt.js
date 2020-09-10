import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com'
import apiKeys from './apikeys'


class kontakt extends Component{

  sendEmail = e => {
    e.preventDefault()

    emailjs
    .sendForm('service_ywfcu7d', apiKeys.template_44jj21v, e.target, apiKeys.user_IeTzbnLxYXhXc9PN7C3uC)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
    }

    
    

      render() {
        const form = document.querySelector('.form');
        if (form) {
          form.addEventListener('submit',this.sendEmail);
        }
        

        return(
          <form class="form">
            <input name='name' type="text" placeholder="Your name..." class="form__input" />
            <input name='topic' type="text" placeholder="Topic..." class="form__input"  />
            <textarea name='message' type="text" placeholder="Your Message..." class="form__input"  ></textarea>
            <input type="submit" value="send" class="form__input form__input--button"/>
          </form>
        );
        
       }
       
}
       
       export default kontakt;