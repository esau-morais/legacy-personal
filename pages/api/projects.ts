import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const projectsEntries = await prisma.projects.findMany({
      orderBy: {
        updated_at: 'desc',
      },
    })

    return res.json(
      projectsEntries.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description,
        visible: project.visible,
        repo_url: project.repo_url,
        created_at: project.created_at,
        updated_at: project.updated_at,
      }))
    )
  }
}
