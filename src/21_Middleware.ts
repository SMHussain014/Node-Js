// Setting up middleware
 const reqFilters1 = (req, resp, next) => {
    if (!req.query.age) {
        resp.send('Please enter your Age: ');
    }
    else if (req.query.age < 18) {
        resp.send('Sorry! You are under age.')
    }
    else {
        next();
    };
};
module.exports = reqFilters1;