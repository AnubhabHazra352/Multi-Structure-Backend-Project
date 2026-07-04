import { config } from "dotenv"
import express from "express"
import connectDB from "./db/index.js"
//
config({
    path: './env'
}) // we use the config function from the dotenv package to load the environment variables from the config.env file


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`)    
    })
    app.on(process.env.PORT, () => {
        log("Error:", error);
        throw error;
    })
})
.catch((err) => {
    console.log("MONGODB connection error !!!", err)
})















