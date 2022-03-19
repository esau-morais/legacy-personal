import { useEnabledOnFirstIntersection } from '@/lib/useEnabledOnFirstIntersection'
import { ContentLink } from './ContentLink'

export default function Posts({ post }) {
  const { intersectionRef } = useEnabledOnFirstIntersection()
  return (
    <div ref={intersectionRef}>
      <ContentLink key={post.slug} href={`/blog/${post.slug}`}>
        <ContentLink.Title>{post.frontmatter.title}</ContentLink.Title>

        <ContentLink.Text>{post.frontmatter.excerpt}</ContentLink.Text>
      </ContentLink>
    </div>
  )
}
