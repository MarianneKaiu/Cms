const articlesData = require("./mocks/mock-atricle");
const authorsData = require("./mocks/mock-author");
const Article = require("./models/article");
const Author = require("./models/author");

async function resetDatabase() {
    try {
        await Article.deleteMany({}); // Supprime tous les documents de la collection "Article"
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de la suppression des documents :",
            error
        );
    }
    try {
        await Author.deleteMany({});
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de la suppression des documents :",
            error
        );
    }

    try {
        await Article.insertMany(articlesData);
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de l'insertion des articles' :",
            error
        );
    }
    try {
        await Author.insertMany(authorsData);
    } catch (error) {
        console.error(
            "Une erreur est survenue lors de l'insertion des auteurs' :",
            error
        );
    }

    console.log("Base de données réinitialisée avec succès.");
}

module.exports = resetDatabase;
