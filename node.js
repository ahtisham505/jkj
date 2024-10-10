const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Mock database query function
const mockDatabaseQuery = (query) => {
    // Simulated database response
    const users = [
        { id: 1, name: 'John Doe', address: '123 Main St, Springfield, USA', dob: '1980-01-01', phone: '555-555-5555' },
        // Add more mock users here...
    ];
    return users.find(user => user.phone === query || user.name.toLowerCase() === query.toLowerCase());
};

app.get('/search', (req, res) => {
    const query = req.query.query;
    const user = mockDatabaseQuery(query);
    if (user) {
        res.json({ success: true, ...user });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
