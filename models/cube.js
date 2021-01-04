const {v4} = require ('uuid')
const fs = require('fs')
const path = require('path');
const databaseFile = path.join(__dirname, '../config/database.json')

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = v4(),
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficulty = difficulty
    }

    save() {
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }

        fs.readFile(databaseFile, (err, data) => {
            if(err) {
                throw err
            }
            const cubes = JSON.parse(data);
            console.log(cubes)
            console.log(newCube)

            cubes.push(newCube);
            fs.writeFile(databaseFile, JSON.stringify(cubes), 'utf8', (error) => {
                if (error) {
                    throw error
                }
    
                console.log('New cube is successguly stored')
            } )

        })
        
    }
}

module.exports = Cube