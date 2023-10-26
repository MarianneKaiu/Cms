import { Router } from "express";
import passportInstance from "./auth";
const Articles = require("./models/article");
const Authors = require("./models/author");

const router: Router = Router();
// router.get("/articles", (req, res, next) => {
//     res.json({
//         message: "Cette route fonctionne",
//     });
//     next();
// });
router.get("/articles", async (req, res) => {
    try {
        const articles = await Articles.find();

        res.json(articles);
    } catch (err) {
        console.error("Erreur lors de la récupération des articles :", err);
        res.status(500).json({
            error: "Erreur lors de la récupération des articles",
        });
    }
});
router.get("/auteurs", async (req, res) => {
    try {
        const authors = await Authors.find();

        res.json(authors);
    } catch (err) {
        console.error("Erreur lors de la récupération des auteurs :", err);
        res.status(500).json({
            error: "Erreur lors de la récupération des auteurs",
        });
    }
});

router.post("/login", (req, res, next) => {
    passportInstance.authenticate(
        "local",
        (err: any, user: Express.User, data: any) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (!user) {
                return res.json({
                    success: false,
                    message: "Nom d'utilisateur ou mot de passe incorrect",
                });
            }
            req.login(user, (loginErr) => {
                if (loginErr) {
                    return next(loginErr);
                }
                return res.json({
                    success: true,
                    message: "Connexion établie",
                    user: req.user,
                });
            });
        }
    )(req, res, next);
});

router.post("/signup", (req, res, next) => {
    passportInstance.authenticate(
        "local-signup",
        (err: any, user: Express.User, data: any) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (user) {
                return res.json({
                    success: true,
                    message: "Utilisateur enregistré",
                });
            } else {
                return res.json({ success: false, ...data });
            }
        }
    )(req, res, next);
});

export default router;
