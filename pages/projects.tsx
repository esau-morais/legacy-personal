import { ContentLink, Layout } from '@/layouts/index'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { IProject } from '@/lib/data'

export default function Projects() {
  const { data: projects } = useSWR<IProject[]>('/api/projects', fetcher)

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
              {projects?.length}
            </p>
          </div>
        </div>
        {projects?.map((project) => (
          <div className="mt-12 space-y-10" key={project.id}>
            <ContentLink href={`${project.repo_url}`}>
              <ContentLink.Title>{project.name}</ContentLink.Title>
              <ContentLink.Text>{project.description}</ContentLink.Text>
            </ContentLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}
