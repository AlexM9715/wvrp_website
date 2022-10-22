const Merch = require("../model/merch");

module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Merch.find()
            .then( (merch) => {
                return res.json(merch)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    create: (req, res) => {
        Merch.create(req.body)
            .then(newMerch => {
                console.log("Successfully created new Merch");
                return res.json(newMerch)
            })
            .catch(err => {
                console.log("Error creating new Merch");
                return res.json(err)
            })
    },

    //READ ONE
    findOne: (req, res) => {
        Merch.findById(req.params.id)
            .then(merch => res.json(merch))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        Merch.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedMerch => res.json(updatedMerch))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: (req, res) => {
        Merch.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}