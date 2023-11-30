import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialProvider from 'next-auth/providers/credentials'
import * as api from '@/lib/api'
import { AuthUser } from '@/types/AuthUser'


const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers:[
  CredentialProvider({
    name: 'credentials',
    credentials:{
      email: { label: 'email', type: 'text'},
      password: {label: 'password', type: 'password'}
    },

    authorize: async (credentials, req) => {
      if(credentials && credentials.email && credentials.password ){
        const user = await api.getUserFromEmail(credentials.email)
        const password = await api.getUserFromHash(credentials.password)
            if(user && password) {
              return {
                id: user.id.toString(),
                name: user.name,
                email: user.email,
                role: user.role
              }
            }
          }
          return null
    },
  })
],
callbacks:{
  jwt: async ({token, user}) =>{
    if(user){
      token.user = user
    }
    return token
  },
  session: async ({session, token}) =>{
    if(token){
      session.user = token.user as AuthUser
    }
    return session
  }
},
pages: {
  signIn: '/login'
}

}
