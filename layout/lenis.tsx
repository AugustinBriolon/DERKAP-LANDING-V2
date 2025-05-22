import { ReactLenis } from 'lenis/react';
import { Bricolage_Grotesque } from 'next/font/google';
import { ReactNode } from 'react';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
});

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <div className={bricolageGrotesque.className}>
      <ReactLenis options={{ lerp: 0.1, duration: 1.5 }} root>
        {children}
      </ReactLenis>
    </div>
  );
}

export default SmoothScrolling;
