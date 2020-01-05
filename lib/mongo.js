const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          } else {
            console.log('Connected successfully to mongo');
            resolve(this.client.db(DB_NAME));
          }
        });
      });
    }

    return MongoLib.connection;
  }

  getAll(collection) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find()
        .toArray();
    });
  }

  get(collection, hotelId) {
    return this.connect().then(db => {
      return (
        db.collection(collection).findOne({ hotel_id: ObjectId(hotelId) }) || []
      );
    });
  }
}

module.exports = MongoLib;
