const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middlewere

//user : dbcontact
//pass : W5bsxZRIXwGlHipL


app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbcontact:W5bsxZRIXwGlHipL@cluster0.khb8i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const blogsCollection = client.db("contact").collection("blogs");

        app.post('/blog', async (req, res) => {
            const newContact = req.body;
            const result = await contactCollection.insertOne(newContact);
            res.send(result);
        })

        app.get('/blog', async (req, res) => {
            const query = {};
            const cursor = blogsCollection.find(query);
            const contacts = await cursor.toArray();
            res.send(contacts);
        });

    }
    finally {

    }
}

run().catch(console.dir);



app.get("/", (req, res) => {
    res.send('simple server runnig')
});

const scripts = "shuvo";

app.get('/users', (req, res) => {
    res.send(scripts)
})


app.listen(port, () => {
    console.log(`here port is runnig ${port}`);
})