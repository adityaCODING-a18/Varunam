import DashboardContent from './DashboardContent';

export const metadata = {
  title: 'Dashboard | Varunam Learning Portal',
  description: 'Personalized dashboard for Varunam users. Access your learning tools, track your progress, and manage your account with ease.',
  keywords: ['Varunam dashboard', 'student portal', 'learning tools', 'Varunam account'],
  openGraph: {
    title: 'Dashboard | Varunam',
    description: 'Welcome to your personalized learning dashboard.',
    url: 'https://yourdomain.com/dashboard',
    siteName: 'Varunam',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/og/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Varunam Dashboard Preview',
      },
    ],
  },
};

export default function DashboardPage() {
  return <DashboardContent />;
}