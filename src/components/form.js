import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../utils/Constants';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      formError: false
    }
  }

  getName = (e) => {
    let username = e.target.value;
    this.setState({
      name: username
    });
  }


  getEmail = (e) => {
    let userEmail = e.target.value;
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    this.setState({
      email: userEmail
    });
  }

  getSubject = (e) => {
    let subject = e.target.value;
    this.setState({
      subject: subject
    });
  }

  getDescription = (e) => {
    let userMessage = e.target.value;
    this.setState({
      message: userMessage
    });
    console.log(this.state.message);
  }

  //send the form
  submitForm = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({
        formError: true
      });
      setTimeout(() => {
        this.setState({ formError: false });
      }, 2000);
      return false;
    } else {
      this.sendMail();
    }
  }

  sendMail() {
    const email = this.state.email;
    const subject = this.state.subject;
    const name = this.state.name;
    const message = this.state.message;
    
    console.log(subject);
    console.log(email, subject, name, message, 'datos');
    if(email !== '' && subject !== '' && name !== ''){
      axios.post( `${Constants.apiUrl}/`, { email: email, title: name, subject: subject, message: message }).then(resp => {
        this.setState({name: '', email: '', message: '', subject: ''});
      });
    }else{
      this.setState({formError: true});
    }
  }



  render() {

    return (
      <form>
        {/* I am just sending a basic error message */}
        {this.state.formError &&
          <p className="error">
            Llena los campos requeridos <span style={{ color: 'black', fontSize: '26px' }}>*</span>
          </p>
        }


        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" placeholder="Nombre*" value={this.state.name} onChange={this.getName} />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" placeholder="Correo*" value={this.state.email} onChange={this.getEmail} />
        </div>

        <div>
          <label htmlFor="subject">Asunto</label>
          <input type="text" name="subject" placeholder="Asunto*" value={this.state.subject} onChange={this.getSubject} />
        </div>

        <div>
          <label htmlFor="name">Mensaje</label>
          <textarea style={{ height: '120px' }} onChange={this.getDescription} placeholder="Mensaje" value={this.state.message} maxLength="450"></textarea>
        </div>
        <div>
          <p>
            Responderemos tan pronto como sea posible
          </p>
          <input type="submit"  value="Enviar" onClick={() => this.sendMail()} />
        </div>

      </form>
    );
  }
}

export default Form;
