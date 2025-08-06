import UploadForm from './UploadForm';

export const metadata = {
  title: 'Upload to Gallery | Varunam',
  description: 'Share your memorable moments or educational visuals with the Varunam community gallery.',
  keywords: ['Varunam gallery', 'upload image', 'student projects', 'educational images'],
  openGraph: {
    title: 'Upload to Varunam Gallery',
    description: 'Post your photos directly to our community gallery.',
    url: 'https://yourdomain.com/gallery',
    images: [
      {
        url: 'https://yourdomain.com/og/gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery Upload Preview',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return <UploadForm />;
}