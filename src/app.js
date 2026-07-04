import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))// app.use(express.json({limit: "20kb"})) is used to parse incoming JSON requests and limit the size of the request body to 20 kilobytes. This helps prevent denial-of-service (DoS) attacks by limiting the amount of data that can be sent in a single request.
app.use(express.urlencoded({extended:true, limit: "20kb"}))// app.use(express.urlencoded({extended:true, limit: "20kb"})) is used to parse incoming URL-encoded requests (like form submissions) and also limits the size of the request body to 20 kilobytes. The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.static("public"))// app.use(express.static("public")) is used to serve static files from the "public" directory.

app.use(cookieParser())// app.use(cookieParser()) is used to parse cookies attached to the client request object. It populates req.cookies with an object keyed by the cookie names.


export default app;