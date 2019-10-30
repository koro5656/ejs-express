exports.startup = function(req, res) {
    res.render('index', {
        title: 'EJSとExpress',
        message: "Hello World!"
    });
}