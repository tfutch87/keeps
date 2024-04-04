import GoogleProvider from "next-auth/providers/google";
import User from '@/app/models/User'


const options = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            profile(profile) {
        // check if the user is created in the database, if the user is not, create a new user in the DB
        // if the user is already in the DB, return the user from the DB
        User.findOne({ email: profile.email }).then((user) => {
                    if (!user) {
                        User.create({
                            email: profile.email,
                            userName: profile.name,
                            picture: profile.picture
                        }).then((user) => {
                            console.log("user created");
                        });
                    }})

                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
}

export default options;