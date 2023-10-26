const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    id: String,
    name: String,
    bio: String,
});

const AuthorModel = mongoose.model("Author", authorSchema);

module.exports = AuthorModel;
