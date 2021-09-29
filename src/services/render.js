
const axios = require('axios')
exports.home_route = (req, res) => {
    axios.get('http://localhost:8000/api/user/fetchAll/')
        .then(response => {
            console.log(response)
            res.render("index", {
                users: response.data
            })
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_user_route = (req, res) => {
    res.render("addUser")
}

exports.update_user_route = (req, res) => {
    const id = req.query.id

    axios.get('http://localhost:8000/api/user/fetchAll', {params:{id:id}})
    .then(response => {
        // console.log(response.data)
        // res.send(response.data);
        res.render("updateUser", {
            user: response.data
        })
    })
    .catch(err => {
        res.send(err);
    })
}