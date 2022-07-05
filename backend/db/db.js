const mongoose = require('mongoose');

main().catch(err => console.log(err));
console.log(process.env.DB_USER_NAME)
async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.r5yzbjd.mongodb.net/${process.env.DB_COLLECTION_NAME}?retryWrites=true&w=majority`, 
  { useNewUrlParser: true, useUnifiedTopology: true });
}