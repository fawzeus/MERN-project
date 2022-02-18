import mangoose from 'mongoose';


const postSchema = mangoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postMessage = mangoose.model('postMessage', postSchema);

export default postMessage;