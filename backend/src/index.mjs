import express from "express";
import { MongoClient } from "mongodb";


process.on("SIGTERM", () => {
    process.exit(0);
});

async function run () {
    
    const client = new MongoClient("mongodb://mongo:27017");
    await client.connect();

    const db = client.db("mern");

    const app = express();

    app.get("/api/count", async (req, res) => {
        await db.collection("events").insertOne({ event: "page_view"});
        const count = await db.collection("events").countDocuments();

        res.json({
            count
        });
    });

    app.listen(8000);
}

run();