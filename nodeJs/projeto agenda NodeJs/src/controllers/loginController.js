const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado')
    res.render('login');
    return;
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Usuário criado.');
        req.session.save = function () {
            return res.redirect('/login/index');
        }

        // return res.send(login.errors);
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Logado com sucesso.');
        req.session.user = login.user;
        req.session.save = function () {
            return res.redirect('/login/index');
        }

        // return res.send(login.errors);
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/')
}