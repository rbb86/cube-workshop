const express = require("../config/express");
const {getAllCubes} = require('../controllers/cubes')
const {getCube} = require('../controllers/database')

const {Router} = require('express')

const router = new Router();

router.get('/', (req, res) => {
    getAllCubes(cubes => {
        res.render('index', {
            title: "Cube workshop",
            cubes
        })
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About | Cube Workshop'
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Cube | Cube Workshop'
    })
})

router.get('/details/:id', (req, res) => {
    
    getCube(req.params.id, cube => {
        res.render('details', {
            title: 'Details | Cube Workshop',
            ...cube
        })
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        title: "Error | Cube Works"
    })
})

module.exports = router