import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'

export default function SinglePost({
  frontmatter: { title, excerpt, author, date, cover_image },
  content,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{excerpt}</p>
      <div>
        <Image src={cover_image} alt={title} layout="fill" />
      </div>

      <div>
        <Image
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHogL3VeIiH3A/profile-displayphoto-shrink_800_800/0/1604674504114?e=2147483647&v=beta&t=jUQoGKJOJ3eBHcGBYaQ1rs_N4EvIWLyA56h65CL9Jao"
          alt={`Avatar of ${author}`}
          layout="fill"
        />
        <p>{author}</p>
        <span>·</span>
        <p>{date}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
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
