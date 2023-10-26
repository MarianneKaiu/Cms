const Author = require("./../models/author");
const authorsData = [
    {
        id: "1",
        name: "Octavia Poulpeson",
        bio: "Octavia Poulpeson est une poulpe passionnée par la danse sous-marine. Avec ses tentacules gracieux, elle est devenue la vedette des fonds marins, où elle enseigne la samba à d'autres créatures marines.",
    },
    {
        id: "2",
        name: "Capitaine Calamari Crochet",
        bio: "Capitaine Crochet est un poulpe pirate légendaire, craint de tous les trésors cachés des océans. Avec ses huit bras redoutables, il creuse des trous secrets pour dissimuler ses précieuses découvertes",
    },
    {
        id: "3",
        name: "Octavie ZenPoulpe",
        bio: "Octavie ZenPoulpe est connue pour son calme sous-marin et sa pratique du yoga océanique. Ses postures gracieuses avec ses tentacules ont apporté une nouvelle sérénité aux profondeurs marines",
    },
];

const saveAuthors = async () => {
    for (const authorInfo of authorsData) {
        const newAuthor = new Author(authorInfo);
        try {
            await newAuthor.save();
        } catch (error) {
            console.error("Erreur lors de l'insertion de l'auteur :", error);
        }
    }
};
saveAuthors()
    .then(() => {
        console.log("Tous les auteurs ont été insérés.");
        // Vous pouvez également insérer des articles de manière similaire ici.
    })
    .catch((error) => {
        console.error("Erreur lors de l'insertion des auteurs :", error);
    });
