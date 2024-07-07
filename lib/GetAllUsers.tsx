export default async function GetAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("faile to fetch data");
  return res.json();
}
