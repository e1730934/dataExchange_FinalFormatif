const addEvaluation = require('../evaluations/addEvaluation');
const register = require('../users/register')
const results = require('../results/getResults');

module.exports = {
    paths:{
        '/createEvals': {
            ...addEvaluation
        },
        '/createUser':{
            ...register
        },
        '/getResults':{
            ...results
        }
    }
};
