import BlogContent from './BlogContent';

export const metadata = {
  title: 'Varunam Blog | Insights, Education & More',
  description: 'Read the latest blog posts from Varunam covering education, motivation, personal growth, and tech insights — created by and for passionate learners.',
  keywords: ['Varunam blog', 'education articles', 'learning tips', 'student resources', 'blog by Aditya Raj'],
  openGraph: {
    title: 'Varunam Blog – Educational Articles & Stories',
    description: 'Explore a collection of thought-provoking blog posts from the Varunam platform. Learn, grow, and stay inspired.',
    url: 'https://yourdomain.com/blog',
    siteName: 'Varunam',
    images: [
      {
        url: 'https://yourdomain.com/og/blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Varunam Blog Preview',
      },
    ],
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}