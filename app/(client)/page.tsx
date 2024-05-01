import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { Header } from "@/app/components/Header"
import { Post, Tag} from '@/app/utils/Interface'
import { PostComponent } from "../components/PostComponent"


async function getPosts() {
  const query = `
  *[_type == 'post'] {
    title,
    slug {current},
    publishedAt,
    excerpt,
      tags[]-> {
        _id,
        slug,
        name,
      },
  }
  `
  const data = await client.fetch(query)
  return data
}

// this is 60 seconds! never deploy like this FFS
export const revalidate = 60

export default async function Home() {
  const posts: Post[] = await getPosts()
  return (
    <div>
      <Header title='Posts' />
      <div>
        {posts?.length > 0 && posts?.map((post) => {
          return (
            <PostComponent key={post?._id} post={post} />
          )
        })}
      </div>
    </div>
  )
}
