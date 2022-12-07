const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    movieDbId: {
        type: Number,
        // required: true
    },
    haveSeen: {
        type: Boolean, 
        // required: true,
    },
},{
        timestamps: true
    });
    

movieSchema.statics.getMovies = function(movieId, movieTitle, check){
    // console.log("yep dirp"),
    return this.findOneAndUpdate(
        {movieDbId: movieId},
        {movieDbId: movieId, title: movieTitle, haveSeen: check},
        {upsert: true, new:true},        
    )    
}

// movieSchema.methods.getNonSeenMovies = async function(){
//     console.log('heyhehey')
// }
    
module.exports=mongoose.model('Movie', movieSchema) 