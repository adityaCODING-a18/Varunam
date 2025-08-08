import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/app/models/User.models";
import TeamMember from "@/app/models/TeamMember.models";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // ✅ Triggered when user tries to sign in
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        console.log("✅ Google account detected:", profile.email);

        const isVerifiedGmail =
          profile?.email_verified && profile?.email?.endsWith("@gmail.com");

        if (!isVerifiedGmail) return false;

        await dbConnect(); // Ensure DB connection before queries

        const existingUser = await User.findOne({ email: profile.email });
        const existingTeamMember = await TeamMember.findOne({ email: profile.email });

        if (!existingUser && !existingTeamMember) {
          console.log("❌ User not registered:", profile.email);
          return false;
        }
      }
      return true;
    },

    // ✅ Attach token info
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    // ✅ Expose token in session
    async session({ session, token }) {
      session.accessToken = token.accessToken ?? null;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin", // custom sign-in page
    error: "/auth/error",   // optional error page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
