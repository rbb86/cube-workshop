const {v4} = require ('uuid')
const {saveCube} = require('../controllers/database')

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

        saveCube(newCube)

        
    }
}

module.exports = Cube