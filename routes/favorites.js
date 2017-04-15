var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('favorites', {favorites : req.session.favorites});
});

router.post('/add', function(req, res, next) {
    // Checks if this is the first time visiting site.
    if (!req.session.favorites) {
        req.session.favorites = [];
    }
    // Loops through array and compares date values to find
    // duplicates.
    for (var x = 0; x < req.session.favorites.length; x++) {
        if (req.session.favorites[x].date == req.body.date) {
            console.log('This is already a favorite');
            return res.redirect('back');
        }
    }
    // Adds object to session.
    req.session.favorites.push(req.body);
    res.redirect('/favorites');
});


router.post('/delete', function(req, res, next) {
    // Loops through array and compares date values to find
    // a match.
    for (var x = 0; x < req.session.favorites.length; x++) {
        if (req.session.favorites[x].date == req.body.date) {
            // Removes object from session.
            req.session.favorites.splice(x,1);
            return res.redirect('back');
        }
    }
});

module.exports = router;