import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api'
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { item, id } = req.body;

    con.query('INSERT INTO items VALUES(?, ?)', [item, id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error inserting data' });
      } else {
        return res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
  } else {
    return res.status(400).json({ message: 'Invalid request method' });
  }
}
