import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Layout } from '@/layouts/index'

export default function SinglePost({
  frontmatter: { title, excerpt, author, date, cover_image },
  content,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={excerpt}
        openGraph={{
          title,
          description: excerpt,
          images: [
            {
              url: cover_image,
              width: 1600,
              height: 836,
              alt: title,
            },
          ],
        }}
      />
      <Layout>
        <div>
          
          <h1 className="text-2xl font-medium text-rose-100/80 sm:text-4xl">
            {title}
          </h1>
          <p className='mt-5 text-lg text-rose-100/70'>{excerpt}</p>
          <div
            className="mt-10 text-lg text-rose-100/70"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'))

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
