/* Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file. */

const router = require('express').Router();
const burger = require('../models/burger.js');


router.get("/", (req, res) => {
    burger.selectAllBurgers().then(burgers => {
        console.log("'/' response =====================");
        console.log(burgers);
        res.render("index",  burgers);
    }).catch(err => {
        console.log(err);
    });
});

router.post("/api/new", (req, res) => {
    burger.insertNewBurger(req.body.name).then(data => {
        console.log("'/api/new' response =====================");
        console.log(data);
        res.redirect("/");
    }).catch(err => {
        console.log(err);
    });;
});

router.put("/api/devour/:id", (req, res) => {
    burger.devourBurger(parseInt(req.params.id)).then(data => {
        console.log("'/api/devour' response =====================");
        console.log(data);
        res.set('X-HTTP-Method-Override', 'GET');
        res.redirect(303, "/");
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;

