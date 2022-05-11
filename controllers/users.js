const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/school.sqlite3');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ dest: 'uploads/' , storage: storage}).single('file')

exports.addUser = async (req,res) => {
    console.log(req.body)
    db.run('INSERT INTO user (name, email, password, profile) VALUES (?,?,?,?)', [req.body.name, req.body.email, req.body.password, req.file.path], (err) => {
        upload(req,res, (err) =>{
            if(err){
                res.status(400).send("Something went wrong!");
            } res.send(req.file);
        })
    })
}
