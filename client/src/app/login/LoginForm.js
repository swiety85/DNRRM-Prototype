import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

function LoginForm (props) {
  const handleSubmit = event => {
    event.preventDefault ();

    props.onSubmit ({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };

  return (
    <Form className="login__form" onSubmit={handleSubmit}>
      <div className="login__fieldset">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email" type="email" placeholder="Email" />
          {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}

        <Form.Group controlId="login" className="login__actions mt-4">
          <Button type="submit" variant="primary" className="login__action-btn">
            Sign in
          </Button>
        </Form.Group>
        <div className="login__forgot-password">
          <Link to="/login">Forgot password?</Link>
        </div>
      </div>
    </Form>
  );
}

export default LoginForm;
