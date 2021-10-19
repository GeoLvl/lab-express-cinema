// models/Movie.model.js
 
const { Schema, model } = require('mongoose');
 
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    description: String,
    showtimes: [String]  
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Movie', movieSchema);