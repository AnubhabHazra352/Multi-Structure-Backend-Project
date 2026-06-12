import { config } from "dotenv"
import express from "express"
import connectDB from "./db/index.js"
//
config() // we use the config function from the dotenv package to load the environment variables from the config.env file

const app = express()















const PORT = process.env.PORT || 8000

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => console.log(`app is listening on port ${PORT}`))
    } catch (error) {
        console.error('Failed to start app:', error)
        process.exit(1)
    }
}

start()