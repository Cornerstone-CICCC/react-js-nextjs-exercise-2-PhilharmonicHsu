import UserItem from "./components/UserItem"

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  email: string
}

const fetchTodos = async () => {
  const res = await fetch("http://localhost:3000/api/users")
  const data = await res.json()

  return data.users
}

const page = async () => {
  const users: User[] = await fetchTodos()

  return (
    <div>
      <h1 className="text-4xl">Users</h1>
      <ul>
        {users.map(t => (
          <UserItem key={t.id} UserItem={t} />
        ))}
      </ul>
    </div>
  )
}

export default page