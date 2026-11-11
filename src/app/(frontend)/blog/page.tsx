import type { Metadata } from 'next'
import { getBlogPosts, getBlogCategories } from '@/lib/data/blog'
import { BlogCard } from '@/components/BlogCard'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog — World Agrobusiness Global',
    description: 'Actualités, conseils et articles sur l\'agriculture et l\'élevage au Cameroun.',
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()])

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Blog</p>
        <h1>Actualités et conseils</h1>
        <p className="lead">Découvrez nos articles sur l\'agriculture, l\'élevage et les équipements agro-pastoraux.</p>
      </section>

      <section className="content-wrap">
        <div className="blog-page-header">
          <h2>Articles récents</h2>
          {categories.length > 0 && (
            <div className="blog-categories">
              <span>Filtrer par :</span>
              <Link href="/blog" className="blog-category-link active">
                Tous
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/categorie/${category.slug}`}
                  className="blog-category-link"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <p className="blog-empty">Aucun article publié pour le moment.</p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
