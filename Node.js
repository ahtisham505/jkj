const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// API to search for a person by phone number
app.post('/api/search', (req, res) => {
    const phoneNumber = req.body.phoneNumber;

    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    const query = 'SELECT name, address, date_of_birth, id FROM people WHERE phone_number = ?';
    
    db.query(query, [phoneNumber], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database query error' });
        }

        if (results.length > 0) {
            const person = results[0];
            res.json({
                success: true,
                name: person.name,
                address: person.address,
                dateOfBirth: person.date_of_birth,
                id: person.id
            });
        } else {
            res.json({ success: false, message: 'No results found' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
