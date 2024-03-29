import { Layout, Post } from '@/components/index'
import { IPost } from '@/lib/data'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'

export default function Blog({ posts }: { posts: IPost[] }) {
  return (
    <Layout>
      <div>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-900 rounded-2xl shadow-surface-elevation-low">
            <Squares2X2Icon className="w-6 text-gray-600/90" />
          </div>

          <div className="flex items-center justify-between flex-1">
            <h1 className="text-2xl text-gray-500/90">Posts</h1>
            <p className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-purple-700 rounded">
              {posts.length}
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-10">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
