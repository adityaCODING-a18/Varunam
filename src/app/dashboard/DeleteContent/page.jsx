// Add this at the top of the file
export const dynamic = 'force-dynamic';
import DeleteContent from "./DeleteContent";

export const metadata = {
  title: 'Delete Content | Varunam',
  description: 'Manage and delete content directly from the Varunam platform.',
  keywords: ['Varunam delete content', 'remove blog post', 'delete media', 'content management'],
  openGraph: {
    title: 'Delete Content | Varunam',
    description: 'Manage and delete content directly from the Varunam platform.',
    url: 'https://yourdomain.com/delete-content',
    images: [
      {
        url: 'https://yourdomain.com/og/article-post.jpg',
        width: 1200,
        height: 630,
        alt: 'Delete Content',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return <DeleteContent />;
}
