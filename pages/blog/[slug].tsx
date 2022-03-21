import { Layout } from '@/layouts/index'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { NextSeo } from 'next-seo'
import path from 'path'

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
          <p className="mt-5 text-lg text-rose-100/70">{excerpt}</p>
          <div
            className="mt-10 text-lg text-rose-100/70 prose prose-headings:text-rose-100/80 prose-code:rounded-md prose-code:bg-gray-700/60 prose-code:font-mono prose-code:text-sm prose-code:text-gray-300/90 prose-code:px-2 prose-code:py-0.5 prose-a:underline prose-a:text-rose-100/90 prose-a:decoration-rose-300/30 prose-a:underline-offset-2 prose-a:transition-all"
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
