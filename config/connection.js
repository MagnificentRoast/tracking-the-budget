const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/tracking-the-budget', {
    useUrlParser: true,
    useUnifiedTopology: true
});
module.exports = mongoose.connection;