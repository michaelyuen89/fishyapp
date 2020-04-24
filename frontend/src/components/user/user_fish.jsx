import React from 'react';
// import UserFishItem from 'user_fish_item';
import FishIndexContainer from '../fish/fish_index_container';


class UserFish extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAllFishes(this.props.currentUser.id);
    }

    render() {
        return (
            <div className="user-fish-main">
                <div>
                    {/* {this.props.fishes.map(fish => 
                        if(fish.userId === this.props.currentUser.id) {
                            <FishIndexContainer fish={fish}
                                deleteFish={this.props.deleteFish}
                                user={this.props.currentUser}
                                key={`fish-${fish.id}`}
                            />
                    )} */}
                </div>
            </div>
        )
    }
}

export default UserFish;