const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const {resultsList} = require("./controllers/results");
const {addUser} = require("./controllers/users");
const docs = require('./docs');
require("dotenv").config()

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const multer = require('multer')
const {insertEvals} = require("./controllers/evals");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ dest: './uploads/' , storage: storage}).single('file')
const uploadCSV = multer({ dest: './uploads/' , storage: storage}).single('csv')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router)
router.use('/api-docs',swaggerUi.serve,swaggerUi.setup(docs));

router.get('/getResults',resultsList)

router.post('/createUser',upload, addUser)
router.post('/createEvals',uploadCSV, insertEvals)


const server = app.listen(port, () => {
    console.log(`L'API peut maintenant recevoir des requêtes http://localhost:` + port);
    console.log("Swagger documentation : http://localhost:" + port + "/api-docs");
});
