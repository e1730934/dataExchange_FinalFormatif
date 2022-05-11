const fs = require("fs");
const csv = require('csv-parser')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/school.sqlite3');
require("dotenv").config();

exports.insertEvals = (req, res) => {
    let evals = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => {
            const evalInfo = {
                id: data.id,
                name: data.name,
            }
            evals.push(evalInfo);
        })
        .on('end', () => {
            evals.forEach(eval => {
                db.run(`INSERT INTO evaluation (id, name)
                        VALUES ('${eval.id}', '${eval.name}')`, (err) => {
                    if (err) {
                        res.status(500).json({
                            message: "Error inserting evaluation",
                            error: err
                        })
                    }
                })
            })
            res.status(200).json({
                message: "Evaluations inserted",
                evals: evals
            })
        })
}
