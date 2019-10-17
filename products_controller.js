



module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url}
        = req.body;

        dbInstance.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage:
            "Well isn't that special? Something went horribly wrong. We let our engineers know."});
            console.log(err)
        });
    },

    getOne: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.read_product(id) 
        .then( product => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage: "Well isn't that special? Something went horribly wrong. We let our engineers know."});
            console.log(err)
        });
    },

    getAll: (req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product()
        .then( products => res.status(200).send(prodcuts))
        .catch( err => {
            res.status(500).send({errorMessage: "Well isn't that special? Something went horribly wrong. We let our engineers know."});
            console.log(err)
        });
    },

    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([ params.id, query.desc ])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage:
                "Well isn't that special? Something went horribly wrong. We let our engineers know."});
                console.log(err)
        });
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage:
                "Well isn't that special? Something went horribly wrong. We let our engineers know."});
                console.log(err)
        });
    },
};