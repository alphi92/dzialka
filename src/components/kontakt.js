import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';



class kontakt extends Component{

  sendEmail = (e) => {
    e.preventDefault();

emailjs.sendForm('service_ywfcu7d', 'template_hturepp', e.target, 'user_IeTzbnLxYXhXc9PN7C3uC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

    

      render() {
        
        

        return(
          <div>
            <div className="container">
            
            <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="numerKontaktowy"><button>Pokaż numer telefonu.</button></div>
                        <h2>Wyślij zapytanie.</h2>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Imię" name="from_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="from_email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Numer kontaktowy" name="from_number"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Twoja wiadomość" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Wyślij!"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
        
       }
       
}
       
       export default kontakt;