import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import Map from '../map/map';

class FishIndex extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllFishes();
    }

    render(){
        // this.props.fishes = object of fishes
        // const fishes = Object.values(this.props.fishes)
        return (
        //   <div className="fish-index-page">
        //     <div className="all-fish-title">Here is a list of all fishes!</div>

        //     <div className="all-fish-list">
        //         {fishes.forEach((fish) => (
        //             <div className="fish-name">{fish.name}</div>
        //         ))}
        //     </div>
        //   </div>
        <div></div>
        );
    }
}

export default FishIndex;