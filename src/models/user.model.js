import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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

    fullName: {
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

    refreshToken: {
        type: String,
    }

}, { timestamps: true });

userSchema.pre("save", async function (next) { //pre was a middleware and pre save hook to hash the password before saving
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 15);// hash the password before saving
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password); //check if the password is correct
}

userSchema.methods.generateAccessToken = function () {
   return jwt.sign(
        {
            //id, email, username, fullname are pay load data that we want to include in the token
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
     return jwt.sign(
        {
            //id, email, username, fullname are pay load data that we want to include in the token
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expresIn: process.env.REFRESHls_TOKEN_EXPIRY,
        }
    )
}

export default user = mongoose.model("User", userSchema)