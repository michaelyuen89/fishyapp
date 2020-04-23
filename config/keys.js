if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}

module.exports = {
  mongoURI:
    "mongodb+srv://dev:<[password]>@cluster0-5tk94.mongodb.net/fishy_app?retryWrites=true&w=majority",
  secretOrKey: "LqzSfp3A29jIwWsqEODDS0JE8d5mOno2"
  //Make sure this is your own unique string
};
