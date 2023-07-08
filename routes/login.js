const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const User = require("../models/users");

router
    .route("/login")
    .get((req, res) => {
        if (req.session.userId) {
            return res.redirect("/");
        }

        //render login page
        res.render("login");
    })
    .post(async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        //find email in database
        const user = await User.findOnde({
            where: {
                email: {
                    [Op.eq]: email,
                },
            },
        });

        if (user) {
            //if email and pwd correct, redirect to app
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                req.session.redirect("/");
            }
        }

        res.render("/auth/login", { error: "User not found"});
    });