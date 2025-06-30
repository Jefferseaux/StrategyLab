import Link from 'next/link'
import { client } from '@/lib/sanity'

const fallbackPosts = [
  {
    _id: '1',
    icon: '📈',
    category: 'Marketing Strategy',
    readingTime: '5 min read',
    publishedAt: '2024-12-15',
    title: '5 Data Points Every Business Should Track',
    excerpt: 'Discover the essential metrics that separate successful businesses from those that struggle...',
    slug: { current: '5-data-points-every-business-should-track' }
  },
  {
    _id: '2',
    icon: '🔬',
    category: 'Scientific Method',
    readingTime: '7 min read',
    publishedAt: '2024-12-08',
    title: 'Why Marketing Should Be Treated as Applied Science',
    excerpt: 'Explore how scientific methodology can transform your marketing...',
    slug: { current: 'marketing-as-applied-science' }
  },
  {
    _id: '3',
    icon: '📱',
    category: 'Local Marketing',
    readingTime: '6 min read',
    publishedAt: '2024-12-01',
    title: 'Louisiana Business Guide to Social Media ROI',
    excerpt: 'Local insights on how Gulf Coast businesses can maximize ROI...',
    slug: { current: 'louisiana-social-media-roi-guide' }
  }
]

export default async function Insights() {
  let posts = []

  try {
    posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      readingTime
    }`)
  } catch (error) {
    console.error('Sanity fetch failed, using fallback:', error)
    posts = fallbackPosts
  }

  return (
    <section id="insights" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Marketing Insights & Strategy
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Data-driven insights, proven strategies, and actionable tips to help your business grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all">
              <div className="h-48 bg-strategy-navy flex items-center justify-center text-5xl text-white">
                {post.icon || '📊'}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US')}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug.current}`} className="text-strategy-gold font-semibold hover:text-strategy-navy transition-colors">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
