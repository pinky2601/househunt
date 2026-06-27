const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://dedipyareddy27_db_user:NEE_PASSWORD@cluster0.1d3nshf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("MongoDB Connected ✅");
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

run();