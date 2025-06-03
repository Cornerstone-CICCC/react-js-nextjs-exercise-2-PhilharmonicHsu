import { User } from "../page"

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/users/${id}`)
  const data: User = await res.json()

  return (
    <div>
      <h1 className="text-4xl mb-8 text-center">User</h1>
      <div className="flex flex-col justify-center items-center">
        <div>First Name: {data.firstName}</div>
        <div>Last Name: {data.lastName}</div>
        <div>Age: {data.age}</div>
        <div>Gender: {data.gender}</div>
        <div>Email: {data.email}</div>

        <a href="/users" className="bg-white px-4 py-1 rounded-md text-black m-4">Back</a>
      </div>
    </div>
  )
}

export default page