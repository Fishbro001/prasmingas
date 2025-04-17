function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/register');
}

function checkAdmin(req, res, next) {
    console.log(req.user);
    if (req.isAuthenticated() && req.user.user_admin) {
      
        return next();
    } else {
        return res.status(403).send('Forbidden: You do not have admin access.');
    }
}


module.exports = { isLoggedIn, checkAdmin };
