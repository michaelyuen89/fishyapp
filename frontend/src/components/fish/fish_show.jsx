import React from 'react';
import NavbarContainer from "../nav/navbar_container";
import splashImage from "../main/splash_image.jpg";
import "./fish_show.css";
import Map from '../map/map';

class FishShow extends React.Component {

    constructor(props){
        super(props);
        this.targetFish = {};
    }
    
    componentDidMount(){
        this.props.fetchAllFishes();
    }

    render(){
        Object.values(this.props.fishes).forEach((fish) => {
            if(fish.name.toLowerCase().replace(" ", "-") === this.props.match.params.fish_name){
                this.targetFish = fish;
            }
        })
        if(!this.targetFish){
            return(<div>Fish does not exists</div>)
        }else{
            return(
            <div className="fish-show-page">
                <div id="fish-show-text">
                    <div id="fish-show-name">{this.targetFish.name}</div>
                    <span></span>
                    <div id="fish-show-info">
                        <span>Description</span>
                        <div id="fish-show-description">{this.targetFish.description}</div>
                        <div id="fish-show-size">
                            <span>Min Legal Size</span>
                            <div id ="fish-show-size-min">{this.targetFish.minLegalSize}</div>
                            <span>Max Legal Size</span>
                            <div id ="fish-show-size-max">{this.targetFish.maxLegalSize}</div>
                        </div>
                        <div id="fish-show-max">{this.targetFish.maxPossession}</div>
                    </div>
                        <span></span>
                    <div id="fish-show-title">
                        <div>FishyDex</div>
                        <span>www.fishy-app.herokuapp.com</span>
                    </div>
                </div>
                <div id="fish-show-img-container">

                </div>
                    
            </div>
            )
        }
    }
}

export default FishShow;