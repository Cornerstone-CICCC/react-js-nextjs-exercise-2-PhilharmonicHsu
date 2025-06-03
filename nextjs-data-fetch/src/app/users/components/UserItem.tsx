"use client"

import { User } from '../page'
import Link from 'next/link'

type Props = {
  UserItem: User
}

const UserItem = ({ UserItem }: Props) => {
  return (
    <li className='flex gap-3 my-2 '>
      - <Link href={`/users/${UserItem.id}`}>{UserItem.firstName}</Link>
    </li>
  )
}

export default UserItem