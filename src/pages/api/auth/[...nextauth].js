import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      id: 'credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        // Add logic here to look up the user from  the credentials supplied
        const user = {
          status: 'success',
          id: 1,
          name: 'John Doe',
          email: 'test@gmail.com',
          token: '123qghvfw3ghv2112',
        };
        const response = { error: 'Invalid email or password' };
        if (
          credentials?.email === 'test@gmail.com' &&
          credentials?.password === '123'
        ) {
          return user;
        }
        throw new Error(response.error);
      },
    }),
  ],

  session: {
    httpOnly: true,
    strategy: 'jwt',
    // Number in seconds: 24 hours * 60 minutes * 60 seconds
    maxAge: 24 * 60 * 60,
  },

  secret: process.env.JWT_SECRET,

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ user, token }) {
      // Filter any data in the callback -> this gets called at signIn
      if (user && user.status === 'success') {
        return { ...user };
      }
      return Promise.resolve(token);
    },

    async session({ session, token }) {
      // Add any other relevant data you need in the useSession callback
      return Promise.resolve({
        ...session,
        user: {
          token: token.token,
          id: token.id,
          name: token.name,
        },
      });
    },
  },
});
