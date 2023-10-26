const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: String,
    imageUrl: String,
    title: String,
    summary: String,
    content: String,
    author: {
        id: String,
        name: String,
        bio: String,
    },
});

const ArticleModel = mongoose.model("Article", articleSchema);

module.exports = ArticleModel;
