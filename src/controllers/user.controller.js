var userDb = require('../models/user.model')

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    const user = new userDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //save
    user
        .save(user)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: "Oops! something went wrong"
            });
        })
}

exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id
        userDb.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Record not found"
                });
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Oops! something went wrong"
            });
        })
    } else {
        userDb.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Oops! something went wrong"
                });
            })
    }
}

exports.update = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return;
    }
    const id = req.params.id;

    userDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            console.log(data)
            if (!data) {
                res.status(404).send({
                    message: "Record not found"
                });
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Oops! something went wrong"
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    userDb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Record not found"
                })
            } else {
                res.send({
                    message: "Deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Oops! something went wrong"
            });
        })
}
