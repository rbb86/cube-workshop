const Cube = require('../models/cube')

const newCube = new Cube('Default', 'This is a default cube', 'https://6lli539m39y3hpkelqsm3c2fg-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Rubiks_Cube_shutterstock_271810067-675x380.jpg', 1)

// console.log(newCube)

newCube.save()