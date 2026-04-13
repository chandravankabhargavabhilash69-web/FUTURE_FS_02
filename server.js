const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB (cite: 86)
mongoose.connect('mongodb://localhost:27017/futureCRM')
    .then(() => console.log('CRM Database Connected'))
    .catch(err => console.log('Connection Error:', err));

// Lead Schema (cite: 88, 89)
const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: { type: String, default: 'New' },
    notes: String
});

const Lead = mongoose.model('Lead', leadSchema);

// CRUD Routes (cite: 92)
app.post('/api/add-lead', async (req, res) => {
    const lead = new Lead(req.body);
    await lead.save();
    res.send({ message: "Lead added successfully" });
});

app.get('/api/leads', async (req, res) => {
    const leads = await Lead.find();
    res.json(leads);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
