import React, { Component } from 'react';
import './App.css';
import Login from './components/login.js';
import Form from './components/form';
import details from './data/details'
import firebase from './config/fire'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields : {},
      details:[],
      isLoggedin: localStorage.getItem('loggedin-id') || false,
      logInError:false
    };
  }
  componentDidMount() {
    // fetch('https://empolyeetracker.firebaseio.com/employeetracker')
    // .then((resp) =>  resp.json())
    // .then((data)=> {
    //   const employeeId = data.employeeId;
    //   const name = data.name;
    //   const dob = data.dob;
    //   const salary = data.salary;
    //   const skills = data.skills;
    //   console.log('Data!!')
    //   // const employeeId = data.employeeId;

    // })
      this.setState({
        details: details
      })
     
      console.log('Data!!')

  }
  authListener = () => {
    let number = document.getElementById('login-input').value;
 
    let recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    firebase.auth().signInWithPhoneNumber(`+91${number}`, recaptchaVerifier)
      .then(confirmation => {
          this.setState({
              isLoggedIn: true,
              logInError: false
          }, () => {
              localStorage.setItem('loggedin-id', number)
          })
      })
      .catch(err => {
          this.setState({
              logInError: true
          }, () => {
              localStorage.removeItem('loggedin-id');
          });
      });
  }

  onChange = (updatedValue) => {
    this.setState({fields: {
      ...this.state.fields,
      ...updatedValue
      }
    });
  }
  // showFetchedDetails= (fetchedDetails) => {
  //   return fetchedDetails.map((data)=> {
  //     <ul>
  //       <li>data.employeeId </li>
  //       <li>data.name </li>
  //       <li>data.dob </li>
  //       <li>data.salary </li>
  //       <li>data.salary.toString() </li>
  //       <li>data.photo </li>

  //     </ul>
  //   })
  // }

  render() {
  //  this.showFetchedDetails(this.state.details);
    return (
      <div className="container">
        { this.state.isLoggedIn 
        ?
        <div>Logged in</div>

        :
        <div>
        <Login onSubmit={this.authListener} logInError={this.state.logInError} />

        </div>
          }
          
          <div style={{display:'none'}} id="recaptcha-container" ></div>
        
      </div>
    );
  }
}

export default App;
