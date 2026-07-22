import multer from "multer"

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) { // cb -> callback
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname ) //originalname use for user upload file original name
  }
})

export const upload = multer({  multerStorage, })
