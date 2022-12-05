const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    movieDbId: {
        type: Number,
        required: true
    }
    haveSeen: {
        type: Boolean,
        required: true,
    },{
        timestamps: true
    })
    
module.exports=movieSchema