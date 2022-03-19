import React, { useEffect, useState } from 'react'
import { ContentLink, Layout } from '@/layouts/index'
import ViewGridIcon from '@heroicons/react/solid/ViewGridIcon'

export default function Projects() {
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
    <Layout>
      <div>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-900 rounded-2xl shadow-surface-elevation-low">
            <ViewGridIcon className="w-6 text-gray-600/90" />
          </div>

          <div className="flex items-center justify-between flex-1">
            <h1 className="text-2xl text-gray-500/90">Projects</h1>
            <p className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-purple-700 rounded">
              {repos.length}
            </p>
          </div>
        </div>
        {repos.map((repo) => (
          <div className="mt-12 space-y-10" key={repo.id}>
            <ContentLink href={`${repo.html_url}`}>
              <ContentLink.Title>{repo.description}</ContentLink.Title>
            </ContentLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}
