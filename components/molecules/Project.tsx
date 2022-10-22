import { IProject } from '@/lib/data'
import Box from '../atoms/Box'

const Project = ({ project }: { project: IProject }) => {
  return (
    <div className="mt-12 space-y-10" key={project.id}>
      <Box href={String(project.repo_url)}>
        <Box.Title>{project.name}</Box.Title>
        <Box.Text>{project.description}</Box.Text>
      </Box>
    </div>
  )
}
export default Project
