const main = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    services: (req, res) => {
        res.render('services');
    },
    help: (req, res) => {
        res.render('help');
    }
};

module.exports = main;