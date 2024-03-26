import mongoose , { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const usersSchema = new Schema({

  // create a schema with a email, user name, user profile image, title for the note, content for the note, timestamp when the note was smbited or updated

    email: String,
    userName: String,
    picture: String,
  

},  { timestamps: true }  )

const User = mongoose.models.User || mongoose.model('User', usersSchema);

export default User;