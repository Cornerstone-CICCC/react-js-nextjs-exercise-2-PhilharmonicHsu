import { User } from "@/app/users/page"
import Link from "next/link"

type Props = {
  params: Promise<{ id: string }>
}

const page =  async ({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`http:localhost:3000/api/users/${id}`)
  const data: User = await res.json()

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-3 w-1/3">
        <div>First Name: {data.firstName}</div>
        <div>Last Name: {data.lastName}</div>
        <div>Age: {data.age}</div>
        <div>Gender: {data.gender}</div>
        <div>Email: {data.email}</div>

        <Link href="/users" className="border-1 px-2 mt-1 inline-block rounded-md shadow-md">Back</Link>
        <a href={`/users/${data.id}`} className="border-1 px-2 mt-1 inline-block rounded-md shadow-md">View User</a>
      </div>
    </div>
  )
}

export default page