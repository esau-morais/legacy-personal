import { Layout, Navigation, Post, ProfileImage } from '@/components/index'
import fetcher from '@/lib/fetcher'
import { IPost, IProject } from '@/lib/data'
import {
  ChatBubbleBottomCenterTextIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid'
import fs from 'fs'
import matter from 'gray-matter'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import { useRef } from 'react'
import { useIntersection } from 'react-use'
import useSWR from 'swr'
import Project from '@/components/molecules/Project'
import cx from 'clsx'
import { LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE } from '@/lib/constants'

export default function Home({ posts }: { posts: IPost[] }) {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
  })

  let showNav = false
  if (intersection && !intersection.isIntersecting) {
    showNav = true
  }

  const { data: projects } = useSWR<IProject[]>('/api/projects', fetcher)

  return (
    <div>
      <Head>
        <title>Esau Morais</title>
        <meta name="description" content="A simple website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showNav={showNav}>
        <div className="-mt-12 space-y-20 sm:mt-0 sm:space-y-32">
          <div ref={intersectionRef}>
            <div className="space-y-8 sm:space-y-12">
              <div className="flex items-center space-x-6">
                <ProfileImage size="large" />

                <div>
                  <h1 className="text-4xl font-medium text-rose-50/80">
                    Esau Morais
                  </h1>
                  <h2 className="text-lg text-rose-100/60">
                    Front-End Developer @{' '}
                    <a
                      href="https://alive.app.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                    >
                      Alive App
                    </a>
                  </h2>
                </div>
              </div>

              <p className="text-xl text-rose-50/80">
                Welcome to my (simple and aesthetic) world! Here I'll be sharing
                more about me and mainly my projects. Hope you enjoy 😊
              </p>

              <Navigation />
            </div>
          </div>

          <div>
            <Link href="/projects">
              <a className="flex items-center space-x-4 group">
                <div className="rounded-2xl bg-white/[5%] p-2 shadow-surface-elevation-low transition duration-300 group-hover:bg-white/[7%] group-hover:shadow-surface-elevation-medium">
                  <Squares2X2Icon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
                </div>

                <div>
                  <h2 className="text-2xl transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                    Projects
                  </h2>
                </div>
              </a>
            </Link>

            <div className="mt-12 space-y-10">
              {projects?.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div>
            <Link href="/blog">
              <a className="flex items-center space-x-4 group">
                <div className="rounded-2xl bg-white/[5%] p-2 shadow-surface-elevation-low transition duration-300 group-hover:bg-white/[7%] group-hover:shadow-surface-elevation-medium">
                  <ChatBubbleBottomCenterTextIcon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
                </div>

                <div>
                  <h2 className="text-2xl transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                    Posts
                  </h2>
                </div>
              </a>
            </Link>

            <div className="mt-12 space-y-10">
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
