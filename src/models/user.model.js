import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,// for faster search
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    avatar: {
        type: String, // cloudinary url
        required: true,
    },

    coverimage: {
        type: String, 
    },

    watchHistory: [
        {
        type: Schema.Types.ObjectId,
        ref: "Video"
        }
        
    ],

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    refreshToken : {
        type: String,
    }

}, {timestamps: true});



export default user = mongoose.model("User", userSchema)