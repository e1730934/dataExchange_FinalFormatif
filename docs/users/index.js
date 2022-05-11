const register = require('./register')

module.exports = {
    paths:{
        '/signup':{
            ...register
        }
    }
}
