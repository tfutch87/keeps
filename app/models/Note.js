import mongoose , { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const notesSchema = new Schema({

  // create a schema with a email, user name, user profile image, title for the note, content for the note, timestamp when the note was smbited or updated

    email: String,
    userName: String,
    userProfileImage: String,
    noteTitle: String,
    noteContent: String,
    status: String,
    category : String,
    active : Boolean,
    userReaction : String

},  { timestamps: true }  )

const Note = mongoose.models.Note || mongoose.model('Note', notesSchema);

export default Note;