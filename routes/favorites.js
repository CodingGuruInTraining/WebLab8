var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('favorites', {favorites : req.session.favorites});
});

router.post('/add', function(req, res, next) {

    console.log(req.session.favorites.length);

    if (!req.session.favorites) {
        req.session.favorites = [];
    }




    for (var x = 0; x < req.session.favorites.length; x++) {
        console.log(req.session.favorites);
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
    console.log("there are this many items in array: " + req.session.favorites.length);
    for (var x = 0; x < req.session.favorites.length; x++) {
        console.log(req.session.favorites[x].date);
        if (req.session.favorites[x].date == req.body.date) {
// req.session.favorites[x].
            console.log("goodbye: " + req.session.favorites[x].date);
            // delete req.session.favorites[x];
            // req.session.favorites.remove(x);
            console.log(req.session.favorites[x]);
            // req.session.favorites.splice(x,1);
            return res.redirect('back');
        }
    }

});


module.exports = router;