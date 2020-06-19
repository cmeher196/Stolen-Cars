const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();


const PolicemenData = [
    {
        id: 1,
        name: 'Ram Lal',
        status: 'on duty'
    },
    {
        id: 2,
        name: 'Shyam Lal',
        status: 'off duty'
    },
    {
        id: 3,
        name: 'Devi Lal',
        status: 'on duty'
    },
    {
        id: 4,
        name: 'Mohan Lal',
        status: 'off duty'
    },
]

ownerDetails = [
    {
        id: 1,
        name: 'Mohan Das',
        address: 'Kondapur',
        status: 'processing',
        text: 'Work-In-Progess',
        fir:'long text..........................'
    },
    {
        id: 2,
        name: 'Lalit Das',
        address: 'Miapur',
        status: 'processing',
        text: 'Work-In-Progess',
        fir:'long text..........................'
    },
    {
        id: 3,
        name: 'Dev Das',
        address: 'Gachibowli',
        status: 'warning',
        text: 'Might caused Thread',
        fir:'long text..........................',
    },
    {
        id: 4,
        name: 'Bihari Das',
        address: 'Ligampalli',
        status: 'default',
        text: 'Complain-Lodged',
        fir:'long text..........................'
    },
    {
        id: 5,
        name: 'Raj Raman Das',
        address: 'Masjid Banda',
        status: 'success',
        text: 'Successful',
        fir:'long text..........................'
    }

]

router.get('/', (req, res) => { //trial fo check whether route is working or not
    res.sendFile('index.html')
})

router.get('/getPolicemenNames', (req, res) => { // get api to get the list of authencated Policemem list
    res.json({
        PolicemenData
    })
})

router.get('/getOwnerNames', (req, res) => { // get api to get the list of authencated CarOwner list
    res.json({
        ownerDetails
    })
})

router.post('/registerPoliceman', (req, res, err) => { // post api to add new policemen to the list
    let policeman = {
        id: req.body.id,
        name: req.body.name,
        status: req.body.status
    }

    if (policeman.name !== null && policeman.name !== '') {
        PolicemenData.push(policeman)

        res.status(200).json({
            message: 'Successfully added Register new Policeman',
            data: policeman
        })
    }
    else {
        res.status(404).json({
            message: 'Null Policeman name entry',

        })
    }
})

router.post('/registerOwner', (req, res) => { // post api to add new car owner to the list
    let owner = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        status: req.body.status
    }

    if (owner.name !== null && owner.name !== "") {
        ownerDetails.push(owner)

        res.status(200).json({
            message: 'Successfully added Register new owner',
            data: owner
        })
    }
    else {
        res.status(404).json({
            message: 'Null owner name',

        })
    }

})


module.exports = router;