// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Cluster45964:V0NEVEVwTlRp@cluster45964.y2qktwa.mongodb.net/?appName=mongosh+2.2.5', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a Mongoose schema
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// Create a Mongoose model
const Form = mongoose.model('Form', formSchema);

app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    const newForm = new Form(formData);
    newForm.save();
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
