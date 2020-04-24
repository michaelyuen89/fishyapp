const Location = require('../../../models/Location');
const mongoose = require('mongoose')
const db = require("../../../config/keys").mongoURI;
mongoose.connect(db)

const locations = [
    // new Location({
    //     name: "New York",
    //     description: "Concrete Jungle where dreams are made of",
    //     lat: 40.73248,
    //     lng: -74.30231,


    // })
]

let done = 0

for(let i = 0; i < locations.length; i++) {
    locations[i].save(function(err, length) {
        done++;
        if(done === locations.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}