import { ContentLink, Layout } from '@/layouts/index'
import {Squares2X2Icon} from '@heroicons/react/24/solid'
import useSWR from 'swr'
import { IRepositories } from '@/lib/interfaces'
import fetcher from '@/lib/fetcher'

export default function Projects() {
  const {data} = useSWR<IRepositories>('/api/my-repos', fetcher)

  return (
    <Layout>
      <div>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-900 rounded-2xl shadow-surface-elevation-low">
            <Squares2X2Icon className="w-6 text-gray-600/90" />
          </div>

          <div className="flex items-center justify-between flex-1">
            <h1 className="text-2xl text-gray-500/90">Projects</h1>
            <p className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-purple-700 rounded">
              {data?.repos?.length}
            </p>
          </div>
        </div>
        {data?.repos?.map((repo) => (
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
