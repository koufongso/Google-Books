const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookID:{type:String, required:true},
    title: { type: String, required: true },
    authors: [{type: Schema.Types.String}],
    thumbnail: {type:String, required: false},
    link:{type:String, required:true},
    description:{type:String, required:false}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;