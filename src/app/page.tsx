import Image from 'next/image'
import { getServerSession } from 'next-auth';
import { CustomSession, authOptions } from './api/auth/[...nextauth]/authOptions';
import AppNav from '@/components/common/AppNav';

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  //const posts: Array<Post> | null = await fetchPosts();
  return (
    <main>
      <AppNav session={session} />
      {JSON.stringify(session)}
    </main>
  )
}
