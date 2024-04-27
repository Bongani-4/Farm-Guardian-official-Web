const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_Pass}@farmguardian.dkpcm72.mongodb.net/?retryWrites=true&w=majority&appName=FarmGuardian`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create  db
    const db = client.db("FGJobPortal");
    const JobsCollections = db.collection("FGJobs");

    //post job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      //console.log(body)

      const result = await JobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(400).send({
          message: "can not insert! try again later",
          status: false,
        });
      }
    });

    //get all Jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await JobsCollections.find({}).toArray();
      res.send(jobs);
    });

    //get jobs by email
    app.get("/MyJobs/:email", async (req, res) => {
      // console.log(req.params.email);

      const jobs = await JobsCollections.find({
        PostedBy: req.params.email,
      }).toArray();
      res.send(jobs);
    });

    //delete job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await JobsCollections.deleteOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
