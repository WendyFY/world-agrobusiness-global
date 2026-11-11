import Link from 'next/link'
import type { Blog as BlogPost } from '@/payload-types'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = typeof post.featuredImage === 'object' && post.featuredImage !== null ? post.featuredImage.url : null
  const categoryName = typeof post.category === 'object' && post.category !== null ? post.category.name : 'Blog'
  const categorySlug = typeof post.category === 'object' && post.category !== null ? post.category.slug : 'blog'
  const date = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

  return (
    <article className="blog-card">
      {imageUrl && (
        <Link href={`/blog/${post.slug}`} className="blog-card-image">
          <img src={imageUrl} alt={post.featuredImage?.alt ?? post.title} />
        </Link>
      )}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <Link href={`/blog/categorie/${categorySlug}`} className="blog-card-category">
            {categoryName}
          </Link>
          {date && <span className="blog-card-date">{date}</span>}
        </div>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
        <Link href={`/blog/${post.slug}`} className="blog-card-link">
          Lire l'article <span>→</span>
        </Link>
      </div>
    </article>
  )
}
