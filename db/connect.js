const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://test:Pass@123@cluster0.srshq3z.mongodb.net/task-manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((err) => console.log(err));
