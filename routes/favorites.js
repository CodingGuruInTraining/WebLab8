var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('favorites', {favorites : req.session.favorites});
});

router.post('/add', function(req, res, next) {
    if (!req.session.favorites) {
        req.session.favorites = [];
    }

    for (var x = 0; x < req.session.favorites.length; x++) {
        if (req.session.favorites[x].date == req.body.date) {
            console.log('This is already a favorite');
            return res.redirect('back');
        }
    }

    req.session.favorites.push(req.body);
    res.redirect('/favorites');
});


router.post('/delete', function(req, res, next) {
    // req.db.collection('astropix').deleteOne(req.body, function(err) {
    //     if (err) {
    //         return next(err);
    //     }
    //     return res.redirect('back');
    // })

    for (var x = 0; x < req.session.favorites.length; x++) {
        console.log("hey");
        if (req.session.favorites[x].date == req.body.date) {

            console.log("goodbye: " + req.session.favorites[x].date)
            req.session.favorites[x].delete;
            return res.redirect('back');
        }
    }

});


module.exports = router;