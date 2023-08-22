import mongoose from "mongoose";

const EmailSchema =  new mongoose.Schema({
    to:{
        type: String,
        required: false,
    },
    from:{
        type: String,
        required: true
    },
    subject:{
        type: String,
    },
    body:{
        type: String,
    },
    date:{
        type: Date,
        required: true
    },
    image:{
        type: String,
    },
    name:{
        type: String,
        required: true
    },
    starred:{
        type: Boolean,
        required: true,
        default: false
    },
    bin:{
        type: Boolean,
        required: true,
        default: false
    },
    type:{
        type: String,
        required: true
    },
})

const email = mongoose.model('emails',EmailSchema);

export default email;