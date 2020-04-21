import React from 'react';
import {withRouter} from 'react-router-dom';
import './login_form.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/fishes');
        }

        this.setState({errors: nextProps.errors})
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
            password: this.state.password
        };

        this.props.login(user);
    }

    close_modal(){
        var modal = document.getElementById("login-modal");
        modal.style.display = "none";
    }



    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
          <div className="login-form-container-modal" id="login-modal">
              <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                <div className="login-form-modal">
                    <input onClick={this.close_modal} className="close-modal" type="button" value="x" />
                    <input
                    className="login-input"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    />
                    <input
                    className="login-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    />
                    <input className="submit-btn" type="submit" value="Submit" />
                    {this.renderErrors()}
                </div>
                </form>
            </div>
          </div>
        );
    }
}

export default withRouter(LoginForm);