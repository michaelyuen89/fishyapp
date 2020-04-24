import React from 'react';
import {Link} from 'react-router-dom';

class UserFishItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.deleteFish(this.props.fish.id);
    }

    render () {
        if(!this.props.fish) return null;
        let button;
        if(this.props.fish.userId === this.props.currentUser) {
            button = <button onClick={this.handleClick}>Delete</button>
        } else {
            button = "";
        }
        
        return (
            <div id="fish-item">
                <div id="fish-info">
                    <div id="fish-name">
                        <Link to={`/fishes/${this.props.fish.userId}`}>
                            {this.props.fish.name}
                        </Link>
                    </div>
                    <div id="fish-description">
                        {this.props.fish.description}
                    </div>
                </div> 
                <div id="fish-delete">
                    {button} 
                </div>
            </div>
        )
    }
}

export default UserFishItem;