import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';
import clsx from 'clsx';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
});

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <div className={clsx(bricolageGrotesque.className, 'min-w-screen')}>
      <ReactLenis options={{ lerp: 0.1, duration: 1.5 }} root>
        {children}
      </ReactLenis>
    </div>
  );
}

export default SmoothScrolling;
