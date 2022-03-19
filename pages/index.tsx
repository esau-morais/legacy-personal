import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Layout, Navigation, ProfileImage, Posts, ContentLink } from '@/layouts/index'
import Link from 'next/link'
import AnnotationIcon from '@heroicons/react/solid/AnnotationIcon'
import ViewGridIcon from '@heroicons/react/solid/ViewGridIcon'
import type { InferGetStaticPropsType } from 'next'
import React, { useEffect, useState } from 'react'
import { useIntersection } from 'react-use'
import Projects from './projects'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
  })

  let showNav = false
  if (intersection && !intersection.isIntersecting) {
    showNav = true
  }

  const [repos, setRepos] = useState<Array<any>>([])

  useEffect(() => {
    getRepos()
  }, [])

  const getRepos = () => {
    fetch('https://api.github.com/users/esau-morais/repos').then(
      async (res) => {
        const data = await res.json()
        setRepos(data)
      }
    )
  }
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
                    Front-End Web Developer
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
                  <ViewGridIcon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
                </div>

                <div>
                  <h2 className="text-2xl transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                    Projects
                  </h2>
                </div>
              </a>
            </Link>

            <div className="mt-12 space-y-10">
              {repos.map((repo) => (
                <div className="mt-12 space-y-10">
                  <ContentLink key={repo.id} href={`${repo.html_url}`}>
                    <ContentLink.Title>{repo.description}</ContentLink.Title>
                  </ContentLink>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link href="/blog">
              <a className="flex items-center space-x-4 group">
                <div className="rounded-2xl bg-white/[5%] p-2 shadow-surface-elevation-low transition duration-300 group-hover:bg-white/[7%] group-hover:shadow-surface-elevation-medium">
                  <AnnotationIcon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
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
                <Posts key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
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
