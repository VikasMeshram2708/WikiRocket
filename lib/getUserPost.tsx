export default async function getUserPost(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: {
        revalidate: 60, // Value in Seconds
      },
    }
  );
  
  if (!res.ok) undefined;

  return res.json();
}
