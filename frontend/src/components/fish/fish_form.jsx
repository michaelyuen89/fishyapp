import React from 'react';
import backgroundImage from '../background_image.jpg';
import "./fish_form.css";

class FishForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            minLegalSize: "",
            maxLegalSize: "",
            maxPossession: "",
            errors: this.props.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.errors.length === 0 && prevProps.errors.length > 0) {
    //         this.props.history.push('/fishes');
    //         this.clearErrors();
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createFish(this.state)
            .then(() => {
                if (this.props.errors.length === 0) {
                    this.props.history.push('/fishes');
                } else {
                    this.setState({errors: this.props.errors})
                    this.props.clearErrors();
                }
            });
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    renderErrors() {
        return (
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`} className="fishform-errors">
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        );
    }

    render() {
        return (
          <>
            <div className="newfish-page-container">
              <img src={backgroundImage} alt="background" />
              <div>
                <h1 className="newfish-hook">Add a New Fish</h1>
                <div className="newfish-form-container">
                  <form onSubmit={this.handleSubmit}>
                    <div className="newfish-form">
                      <br />
                      <div className="form-group">
                        <input
                          type="text"
                          value={this.state.name}
                          onChange={this.update("name")}
                          placeholder="Name of Fish (Required)"
                        />
                        <br />
                        <input
                          type="text"
                          value={this.state.description}
                          onChange={this.update("description")}
                          placeholder="Brief Description (Optional)"
                        />
                        <br />
                        <input
                          type="number"
                          value={this.state.minLegalSize}
                          onChange={this.update("minLegalSize")}
                          placeholder="Minimum Legal Size (Optional)"
                        />
                        <br />
                        <input
                          type="number"
                          value={this.state.maxLegalSize}
                          onChange={this.update("maxLegalSize")}
                          placeholder="Maximum Legal Size (Optional)"
                        />
                        <br />
                        <input
                          type="number"
                          value={this.state.maxPossession}
                          onChange={this.update("maxPossession")}
                          placeholder="Maximum Possession (Optional)"
                        />
                        <br />
                      <div className="fishform-errors-container">
                        {this.renderErrors()}
                      </div>
                      <div className="submit-button">
                          <br/>
                        <input type="submit" value="Add Fish" />
                      </div>
                      </div>
                      <br />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <footer>
              <div className="footer-links">
                <div className="footer-github">
                  <ul>
                    {" "}
                    Github:
                    <li><a href="https://github.com/michaelyuen89/fishyapp">fishyapp</a></li>
                    {/* <li>
                      <a href="https://github.com/Sunghan11">Elijah Nam</a>
                    </li>
                    <li>
                      <a href="https://github.com/emikyu">Emily Wu</a>
                    </li>
                    <li>
                      <a href="https://github.com/joexiao97">Joe Xiao</a>
                    </li>
                    <li>
                      <a href="https://github.com/michaelyuen89">
                        Michael Yuen
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="footer-copyright">
                Copyright &copy; 2020 Fishers
              </div>
            </footer>
          </>
        );
    }
}

export default FishForm;