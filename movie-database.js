// initalised an object of MongoClient which will give access to the connect method
const { MongoClient } = require("mongodb");
const uri = require("/config.js");

async function main() {
  // const uri =
  //   "mongodb+srv://jbravoh:blackCodher1@cluster0.bn3a4.mongodb.net/test"; // URI is the connection string to access database
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    //Connect to the MongoDB cluster
    await client.connect();
    //Make the appropriate DB calls
    async function listDatabases(client) {
      databasesList = await client.db().admin().listDatabases();
      console.log("Databases:");
      databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);


// // GET
// app.get("", (req, res) => {
//   res.json({
//     status:"success",
//     data:
//   })
// })

// // GET /:id
// app.get("", (req, res) => {
//   console.log(req.params.id);

// })








