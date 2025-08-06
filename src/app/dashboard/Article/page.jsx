import ArticleForm from './ArticleForm';

export const metadata = {
  title: 'Post an Article | Varunam',
  description: 'Write and publish insightful articles directly to the Varunam community blog.',
  keywords: ['Varunam article post', 'submit blog', 'write for Varunam', 'educational content'],
  openGraph: {
    title: 'Post Your Article | Varunam',
    description: 'Share your knowledge by submitting an article to Varunam’s educational blog.',
    url: 'https://yourdomain.com/article',
    images: [
      {
        url: 'https://yourdomain.com/og/article-post.jpg',
        width: 1200,
        height: 630,
        alt: 'Post an Article',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return <ArticleForm />;
}
