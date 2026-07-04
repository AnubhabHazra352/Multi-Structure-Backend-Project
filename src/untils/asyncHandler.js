const asyncHandler = (fn) => async(req, res, next) => { //
    try {
        await fn(req, res, next);
    } catch (error) {
       res.status(err.message || 404).json({
        success: false,
        message: err.message || 'Server Error'
       })
    }
};

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req,res,next)).
//         catch((err) => next(err))
//     }
// }

export {asyncHandler}