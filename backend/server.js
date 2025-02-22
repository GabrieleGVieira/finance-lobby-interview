import express from "express";
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.json())

app.get("/screen/:id", (req, res) => {
    const screens = {
      1: "This is screen 1",
      2: "This is screen 2",
      3: "This is screen 3",
    };
    res.json({message: screens[req.params.id] || "Screen not found"})
})

app.listen(8800, () => {
    console.log("Server started!")
})