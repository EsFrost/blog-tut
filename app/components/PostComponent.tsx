import React from 'react'
import Link from 'next/link'
import { Post } from '@/app/utils/Interface'
import { Lilita_One, VT323 } from 'next/font/google'

const lilita = Lilita_One({weight: '400', subsets: ['latin']})
const vt = VT323({weight: '400', subsets: ['latin']})

interface Props {
    post: Post
}

export const PostComponent = ({post}: Props) => {
  return (
    <>
    <div className={cardStyle}>
        <Link href={`/posts/${post.slug.current}`}>
            <h2 className={`${lilita.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
            <p className={`${vt.className} my-2 text-purple-800`}>{new Date(post?.publishedAt).toDateString()}</p>
            <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
        </Link>

        <div>
            {post?.tags?.map(tag => {
                return <span className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900' key={tag._id}>#{tag.name}</span>
            })}
        </div>
    </div>
    </>
  )
}

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500
hover:text-white
hvoer:dark:bg-gray-950
`