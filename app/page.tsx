import { getUsers } from "@/actions/user";

export default async function Home() {
  const user = await getUsers();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{JSON.stringify(user)}</p>
    </main>
  );
}
