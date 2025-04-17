import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import User from "@/models/User";
import connectDb from "@/lib/connectDb";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectDb()

          // Check if user already exists
          const existingUser = await User.findOne({ email: user.email })

          if (!existingUser) {
            // Create new user if they don't exist
            await User.create({
              email: user.email,
              name: user.name,
              image: user.image,
            })
          }

          return true
        } catch (error) {
          console.error("Error saving user to database:", error)
          return true // Still allow sign in even if DB save fails
        }
      }
      return true
    },
    async session({ session, token }) {
      // Add user ID to session
      if (session.user) {
        try {
          await connectDb()
          const user = await User.findOne({ email: session.user.email })
          if (user) {
            session.user.id = user._id.toString()
          }
        } catch (error) {
          console.error("Error fetching user from database:", error)
        }
      }
      return session
    }
  }


};