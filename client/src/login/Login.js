import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import './Login.scss';

class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    fetch ('/api/auth/login', {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify ({
        email: this.refs.email.value,
        password: this.refs.password.value
      }),
    }).then(response => console.log(response));
  };

  getUsers = () => {
    fetch ('/api/users', {
        method: 'GET',
        headers:{ 'Content-Type': 'application/json' },
        // credentials: 'same-origin',
      }).then(response => console.log(response));
  };

  render () {
    return (
      <div className="login__container">
        <h2 className="login__header">Let's get started now!</h2>
        <h6 className="login__header mb-5">
          Or <a href="/">create an account</a> if not registered yet
        </h6>

        <div className="login__window">
          <div className="login__window-icon">
            <i className="fas fa-jedi" />
          </div>
          <Form className="login__form" onSubmit={this.handleSubmit}>
            <div className="login__fieldset">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" ref="email" type="email" placeholder="Email" />
                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" ref="password" type="password" placeholder="Password" />
              </Form.Group>
              {/* <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}

              <Form.Group controlId="login" className="login__actions mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="login__action-btn"
                >
                  Sign in
                </Button>
              </Form.Group>
              <div className="login__forgot-password">
                <Link to="/login">Forgot password?</Link>
              </div>
            </div>
          </Form>
          <Button
                  type="submit"
                  variant="secondary"
                  onClick={this.getUsers}
                >
                  Test
                </Button>
        </div>
      </div>
    );
  }
}

// function Login () {
  // fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //         "Content-Type": "application/json",
  //         // "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrer: "no-referrer", // no-referrer, *client
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  // })
  // .then(response => response.json());

//   return (
//     <div className="login__container">
//       <h2 className="login__header">Let's get started now!</h2>
//       <h6 className="login__header mb-5">
//         Or <a href="/">create an account</a> if not registered yet
//       </h6>

//       <div className="login__window">
//         <div className="login__window-icon"><i className="fas fa-jedi" /></div>
//         <Form className="login__form" onSubmit={this._handleSubmit}>
//           <div className="login__fieldset">
//             {/* <h3>LOGIN</h3> */}
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control type="email" placeholder="Email" />
//               {/* <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                             </Form.Text> */}
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password:</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             {/* <Form.Group controlId="formBasicChecbox">
//                             <Form.Check type="checkbox" label="Check me out" />
//                         </Form.Group> */}

//             <Form.Group controlId="login" className="login__actions mt-4">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="login__action-btn"
//               >
//                 Sign in
//               </Button>
//             </Form.Group>
//             <div className="login__forgot-password">
//               <Link to="/login">Forgot password?</Link>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

export default Login;
