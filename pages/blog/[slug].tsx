import { Layout } from '@/layouts/index'
import { WPM } from '@/lib/constants'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import path from 'path'

export default function SinglePost({
  frontmatter: { title, excerpt, author, date, cover_image },
  content,
}) {
  const proseContent = marked(content)
  const totalWordsCount = proseContent.trim().split(/\s+/).length
  const readingTimeCount = Math.ceil(totalWordsCount / WPM)

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
          <div className="flex flex-wrap items-center justify-between text-lg text-rose-100/40">
            <div className="flex mt-2 space-x-2">
              <div>
                <Link href="/">
                  <a className="flex items-center transition-all border-b border-rose-100/40 hover:text-rose-200/90 hover:border-rose-200/90">
                    {author}
                  </a>
                </Link>
              </div>

              <div className="text-rose-100/30">&middot;</div>

              <div>{date}</div>
            </div>

            <div className="mt-2 text-gray-400/90">
              {readingTimeCount} min read
            </div>
          </div>

          <div
            className="mt-10 text-lg text-rose-100/70 prose prose-headings:text-rose-100/80 prose-code:font-mono prose-code:text-sm prose-code:text-[#f1f1f1] prose-code:px-2 prose-code:py-0.5 prose-a:underline prose-a:text-rose-100/90 prose-a:decoration-rose-300/30 prose-a:underline-offset-2 prose-a:transition-all prose-strong:text-rose-100/70 prose-strong:font-semibold prose-blockquote:border-l-2 prose-blockquote:border-l-rose-100/70 prose-blockquote:text-rose-100/70"
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
