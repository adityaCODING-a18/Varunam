'use client'
export const dynamic = 'force-dynamic';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FreeClasses = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://www.youtube.com/@varunamforvictory');
  }, [router]);

  return (
    <div>
      Redirecting to free classes of Varunam...
    </div>
  );
};

export default FreeClasses;
