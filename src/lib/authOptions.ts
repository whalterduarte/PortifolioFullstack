import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
   CredentialsProvider({
     name: 'credentials',
     credentials: {
       email: {label: 'email', type: 'text'},
       password: {label: 'password', type: 'password'}
     },

     async authorize(credentials, req) {
       const response = await fetch(`/login`, {
         method: 'POST',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify({
           email: credentials?.email,
           password: credentials?.password
         })
       })

       const user = await response.json()

       if (user && response.ok) {
         return user
       }

       return null
     },
   })
  ],
  pages: {
   signIn: '/blog/login'
 },
 callbacks: {
   async jwt({ token, user }) {
     user && (token.user = user)
     return token
   },
   async session({ session, token }){
     session = token.user as any
     return session
   }
 }
}
export default NextAuth(nextAuthOptions)