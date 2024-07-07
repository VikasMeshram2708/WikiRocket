import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user?.name,
    description: `This is the description page of ${user?.name}`,
  };
}

export default async function page({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  // const [user, posts] = await Promise.all([userData, userPostData]);
  const user = await userData;

  return (
    <>
      <h2>{user?.name}</h2>
      <br />
      <Suspense fallback={<h1 className="text-white text-3xl">Loading...</h1>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}
