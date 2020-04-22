const Fish = require('../../../models/Fish');
const mongoose = require('mongoose')
const db = require("../../../config/keys").mongoURI;
mongoose.connect(db)

const fishes = [
    new Fish({
        name: "Striped Bass",
        description: "Big game fish, fun to catch!",
        minLegalSize: 28,
        maxPossession: 1
    })
]

let done = 0;
for(let i = 0; i < fishes.length; i++){
    fishes[i].save(function(err,length){
        done++;
        if(done===fishes.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
