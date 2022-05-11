const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/school.sqlite3');

exports.resultsList = async (req, res) => {
  const results = await db.all('SELECT s.last_name, s.first_name, e.name as evaluationName, r.note FROM results r, students s , evaluation e', function (err) {
    if(err) {
      return res.status(500).json({
        message: 'Error fetching results',
        error: err
      });
    }
  });
  return res.status(200).json({
    message: 'Successfully fetched results',
    results: results
  })
}
