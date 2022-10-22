import { useEnabledOnFirstIntersection } from '@/lib/useEnabledOnFirstIntersection'
import Box from '../atoms/Box'

const Post = ({ post }) => {
  const { intersectionRef } = useEnabledOnFirstIntersection()

  return (
    <div ref={intersectionRef}>
      <Box key={post.slug} href={`/blog/${post.slug}`}>
        <Box.Title>{post.frontmatter.title}</Box.Title>
        <Box.Meta>{post.frontmatter.date}</Box.Meta>
        <Box.Text>{post.frontmatter.excerpt}</Box.Text>
      </Box>
    </div>
  )
}
export default Post
