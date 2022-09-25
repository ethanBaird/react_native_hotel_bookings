
const express = require('express');
const { ObjectId } = require('mongodb');

const createRouter = function (collection) {

    const router = express.Router();

    //Index
    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then( (docs) => res.json(docs) )
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    //Create
    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then( (result) => {
                console.log(result)
                res.json(result.ops[0])
             })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
        })
    });
    
    // Delete
    router.delete('/:id', (req, res)=> {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectId(id)})
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
    });
    })

    // update
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        delete updatedData._id;
        collection
            .updateOne(
                { _id: ObjectId(id) },
                { $set: updatedData }
            )
            .then( result => res.json(result))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });

            })
        });

    return router;
};

module.exports = createRouter;