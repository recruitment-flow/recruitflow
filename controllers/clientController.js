const db = require('../models')

const Client = db.client;
const addClient = async (req, res) => {

    let info = {
        client_name: req.body.client_name,
        isActive: req.body.isActive        
    }

    const client = await Client.create(info)
    res.status(200).send(client)
}



// 2. get all products

const getAllClients = async (req, res) => {

    let clients = await Client.findAll({})
    res.status(200).json(clients)

}

// 3. get single product

const getOneClient = async (req, res) => {

    let id = req.params.id
    let client = await Client.findOne({ where: { id: id }})
    res.status(200).send(client)

}

// 4. update Product

const updateClient = async (req, res) => {

    let id = req.params.id

    const client = await Client.update(req.body, { where: { id: id }})

    res.status(200).send(client)
   

}

// 5. delete product by id

const deleteClient = async (req, res) => {

    let id = req.params.id
    
    await Client.destroy({ where: { id: id }} )

    res.status(200).send('Client is deleted !')

}

// 6. get published product

const getPublishedClients = async (req, res) => {

    const clients =  await Client.findAll({ where: { isActive: true }})

    res.status(200).send(clients)

}

module.exports = { addClient, getAllClients, getOneClient, updateClient, deleteClient, getPublishedClients }