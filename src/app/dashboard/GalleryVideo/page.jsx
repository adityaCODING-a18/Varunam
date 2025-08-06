import VideoUploadForm from './VideoUploadForm';

export const metadata = {
  title: 'Upload Video | Varunam Gallery',
  description: 'Contribute your educational or creative videos to the Varunam community gallery.',
  keywords: ['Varunam video upload', 'student videos', 'upload tutorial', 'learning through video'],
  openGraph: {
    title: 'Upload Your Video | Varunam',
    description: 'Add your videos to Varunam’s student-powered community gallery.',
    url: 'https://yourdomain.com/video',
    images: [
      {
        url: 'https://yourdomain.com/og/video-upload.jpg',
        width: 1200,
        height: 630,
        alt: 'Upload Your Video',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return <VideoUploadForm />;
}
