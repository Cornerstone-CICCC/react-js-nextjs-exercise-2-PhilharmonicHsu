import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1 text-center">
        <Link className="text-5xl bg-white text-black px-4 py-1" href="/users">View User List</Link>
      </div>
    </div>
  );
}
