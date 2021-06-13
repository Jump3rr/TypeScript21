import {FirebaseDb} from './firebaseDb';
import {Db} from './db';


const db = new Db()
const fbDb = new FirebaseDb()
const database = db;

export default database;

