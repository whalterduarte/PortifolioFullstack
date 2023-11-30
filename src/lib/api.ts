//LOGIN  
import prisma from "./prisma"

export const getUserFromEmail = async (email: string) =>{
  const user = await prisma.user.findUnique({
  where: {
    email,
  } 
})
return user
}

export const getUserFromHash = async (hash: string) =>{
  const user = await prisma.user.findUnique({
  where: {
    hash,
  } 
})
return user
}

export const getUserId = async (id: number) =>{
  const user = await prisma.user.findUnique({
  where: {
    id
  } 
})
return user
}
