import { forwardRef } from 'react';

const Section = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; id?: string }
>(({ children, className, id }, ref) => {
  return (
    <section
      ref={ref}
      className={`${className} z-10 mx-auto w-full max-w-7xl px-4 md:px-8`}
      id={id}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
