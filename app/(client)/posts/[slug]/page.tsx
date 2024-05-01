import { Header } from '@/app/components/Header'
import { client } from '@/sanity/lib/client'
import { VT323 } from 'next/font/google'
import React from 'react'
import { Post} from '@/app/utils/Interface'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

const vt = VT323({weight: '400', subsets: ['latin']})

interface Params {
    params: {
        slug: string
    }
}

async function getPost(slug: string) {
 const query = `
 *[_type == 'post' && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
      tags[]-> {
        _id,
        slug,
        name,
      },
      body,
  }
 `

 const data = await client.fetch(query)
 return data
}

export default async function Page({params}: Params)  {
    const post: Post = await getPost(params?.slug)
    return (
        <div>
            <Header title={post?.title} />
            <div className='text-center'>
                <span className={`${vt.className} text-purple-500`}>{new Date(post?.publishedAt).toDateString()}</span>
                <div className='mt-5'>
                    {post?.tags?.map((tag) => {
                        return (
                            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                                <span className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>#{tag.name}</span>
                            </Link>
                        )
                    })}
                </div>
                
                <div className={richTextSytles}>
                    <PortableText 
                        value={post?.body}
                    />
                </div>
            </div>
        </div>
    )
}

const richTextSytles = `
    mt-14
    text-justify
    max-w-2xl
    m-auto
    prose-headings:my-5
    prose-headings:text-2xl
    prose-p:mb-5
    prose-p:leading-7
    prose-li:list-disk
    prose-li:leading-7
    prose-li:ml-4
`