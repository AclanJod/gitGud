//middleware functions execute between requests

// if userId is not in session, redirect to login page
const checkSession = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }

    res.redirect("/auth/login");
};

module.exports = checkSession;