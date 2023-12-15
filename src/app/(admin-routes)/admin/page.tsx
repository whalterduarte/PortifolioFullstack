import {nextAuthOptions} from "@/app/api/auth/route"
import ButtonLogout from "@/app/_components/ButtonLogout"
import { getServerSession } from "next-auth"
import Link from "next/link"


export default async function Admin(){
	const session = await getServerSession(nextAuthOptions)

	

	return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
    <div className="flex space-x-2">
      <Link href="/admin/post/add" className="bg-blue-500 px-4 py-2 text-white rounded">
        Add Post
      </Link>
      <Link href="/admin/project/add" className="bg-green-500 px-4 py-2 text-white rounded">
        Add Project
      </Link>
    </div>
    <br />
    <ButtonLogout />
  </div>
	)
}