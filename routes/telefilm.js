var mongo = require('mongodb').MongoClient;
const config = require('config');
const dbConfig = config.get('Customer.dbConfig');

mongo.connect(dbConfig.url, {useNewUrlParser: true}, (err,client)=> {
  if(err) {
    return console.dir(err)
  }
  db = client.db('filmlibrary');
  console.log('Connected to MongoDB')
});
