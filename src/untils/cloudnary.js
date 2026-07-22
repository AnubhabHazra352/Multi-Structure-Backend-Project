import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config ({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return console.log("Cloud't find the path");

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // File as been uploaded successfull
        console.log("file is uploaded on cloudinary", response.url);
        
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saveed temporary file as the upload
        return null
    }
}

// cloudinary.v2.uploader.uploade("url", 
//     { public_id: "olympic_flag"}, 
//     function (error, result) { console.log(result); });