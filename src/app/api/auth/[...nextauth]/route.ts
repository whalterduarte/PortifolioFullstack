// Importando os módulos necessários
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Configurando as opções do NextAuth
const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        const response = await fetch(`${process.env.BASEAPI}/login`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        });

        const user = await response.json();

        if (user && response.ok) {
          return user;
        }

        return null;
      },
    })
  ],
  pages: {
    signIn: '/blog/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    }
  }
};

// Exportando a função handler, necessária para a API Route
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, options);
}

// Configurações adicionais para a API Route
export const config = {
  api: {
    bodyParser: false,
  },
};
