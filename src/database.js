const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GuitarStore_1', )

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));