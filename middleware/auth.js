function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/register');
}

module.exports = isLoggedIn;
