require('../config/database');
var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.route('/users')
    .post(function (req, res) {
        var user = new User(req.body);
        user.save(function (error, data) {
            if (error) res.send(error);
            res.json(data);
        });
    })
    .get(function (req, res) {
        User.find({})
            .exec(function (error, data) {
                if (error) res.send(error);
                res.json(data);
            });
    });

router.route('/users/:user_id')
    .get(function (req, res) {
        User.find({_id: req.params.user_id})
            .exec(function (error, data) {
                if (error) res.send(error);
                res.json(data);
            });
    })
    .put(function (req, res) {
        User.findById(req.params.user_id, function (error, data) {
            if (error) return res.send(error);
            data.name = req.body.name;
            data.surname = req.body.surname;
            data.email = req.body.email;
            data.save(function (error, data) {
                if (error) res.send(error);
                res.send(data);
            });
        });
    })
    .delete(function (req, res) {
        User.find({_id: req.params.user_id})
            .remove(function (error) {
                if (error) res.send(error);
                res.json({message: 'Successfully deleted'});
            });
    });

module.exports = router;