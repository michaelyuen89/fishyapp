import React from 'react';
import { Link } from 'react-router-dom';
import './search_bar.css';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputVal: "",
            dropdown: false
        };


        this.updateInput = this.updateInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllFishes();
        window.addEventListener('click', (e) => {
            if (!e.target.matches('.search-suggestions') && this.state.dropdown) {
                this.setState({dropdown: false});
            }
        })
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.path !== prevProps.path && !this.props.query) {
    //         this.setState({dropdown: false, inputVal: ""})
    //     }
    // }

    updateInput(e) {
        const inputVal = e.currentTarget.value;
        this.setState({ inputVal });
        if (inputVal.trim()) {
            if (!this.state.dropdown) this.setState({dropdown: true});
        } else {
            if(this.state.dropdown) this.setState({dropdown: false});
        }
    }

    handleClick(e) {
            e.preventDefault();

            this.props.history.push(`/fishes/${this.state.inputVal.trim().toLowerCase().split(" ").join("-")}`);
            this.setState({ dropdown: false, inputVal: this.state.inputVal.trim() });
    }

    handleKeyDown(e) {
        if (this.state.inputVal.trim() && e.key === 'Enter') {
            e.preventDefault();

            this.props.history.push(`/fishes/${this.state.inputVal.trim().toLowerCase().split(" ").join("-")}`);
            this.setState({dropdown: false, inputVal: this.state.inputVal.trim()});
        }
    }

    hideDropdown(name) {
        return e => this.setState({dropdown: false, inputVal: name});
    }

    render() {
        if (this.props.fishNames === null) return null;

        const foundNames = [];
        const that = this;
        const names = this.props.fishNames;
        names.forEach((name) => {
            if (name === this.state.inputVal.trim()) return;
            if (name.slice(0, that.state.inputVal.trim().length).toLowerCase() === that.state.inputVal.trim().toLowerCase()) foundNames.push(
                <Link key={name} to={`/fishes/${name.toLowerCase().split(" ").join("-")}`}>
                    <li key={name} onClick={this.hideDropdown(name)}>{name}</li>
                </Link>
            );
        });

        return (
            <div className="search-bar">
                <input type="text" placeholder="Search for a fish <.(<<)<" value={this.state.inputVal} onChange={this.updateInput} onKeyDown={this.handleKeyDown}/>
                <button className="button" onClick={this.handleClick}><i className="fa fa-search search-bar" aria-hidden="true"></i></button>
                {
                    this.state.dropdown ?
                    (<div className="search-suggestions">
                        <ul>
                            {
                                foundNames
                            }
                        </ul>
                    </div>) : ("")
                }
            </div>
        );
    }
}

export default SearchBar;