import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './signup_form.css';
// import fish from './bluefish.png';
import signupImage from './signup_background.png';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };
        
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    handleDemoLogin() {
        this.props.login(this.props.demoUser)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    
    
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="user-errors">
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="outer-container">
            <img src={signupImage} id="signup-background-img" alt="signup" />
            <div className="signup-form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                  <br />
                  <h2 id="signup-header">Welcome</h2>
                  <br />
                  <div id="signup-fish-logo">
                    {/* <img src={fish} /> */}
                    <i className="fas fa-fish fa-5x"></i>
                  </div>
                  {/* <button onClick={this.handleDemoLogin}>
                              <div className="demouser">SIGN IN AS DEMO USER </div>
                          </button> */}
                  <br />
                  {/* <div className="dashed">
                              <span>OR</span>
                          </div> */}
                  <div className="form-group">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                    />
                    <br />
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      placeholder="Username"
                    />
                    <br />
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      placeholder="Password"
                    />
                    <br />
                    <input
                      type="password"
                      value={this.state.password2}
                      onChange={this.update("password2")}
                      placeholder="Confirm Password"
                    />
                    <br />
                  </div>
                  <div className="user-errors-container">
                    {this.renderErrors()}
                  </div>
                  <div id="submit-button">
                    <input type="submit" value="Sign Up" />
                  </div>
                  <br />
                  <br />
                  <div id="switch-login-signup">
                    <span>Already a Member? </span>
                    <Link className="login-link" to="/login">
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default withRouter(SignupForm);