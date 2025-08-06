'use client';

import { useEffect } from 'react';

export default function FreeClasses() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.youtube.com/@varunamforvictory';
    }
  }, []);

  return <p>Redirecting to free classes of Varunam...</p>;
}
