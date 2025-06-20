'use client';

import { ReactNode, useEffect, useState } from 'react';

// This component suppresses hydration warnings from browser extensions
function SupressHydrationWarning({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

export default SupressHydrationWarning;
