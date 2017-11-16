import mongoose from 'mongoose';

const book = new mongoose.Schema({
  titre : {type : String, required : true},
  auteur : {type : String, required : true},
  anne_de_publication : {type : Number, required : true},
  pages : {type : Number, required : true},
  date_de_creation : {type : Number, required : true}
},
{
  versionKey : false
});

export default mongoose.model("Book", book, "books");
