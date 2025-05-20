import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

export default function Button({
  children,
  icon,
  boxShadow = false,
  outline = false,
  className,
  asLink = false,
  href = '#',
}: {
  children?: React.ReactNode;
  icon?: string;
  boxShadow?: boolean;
  outline?: boolean;
  className?: string;
  asLink?: boolean;
  href?: string;
}) {
  if (asLink) {
    return (
      <Link
        href={href}
        className={clsx(
          'bg-primary flex w-fit cursor-pointer items-center justify-start gap-2 rounded-full px-4.5 py-3 text-sm font-bold text-black',
          outline && 'border-white-second border bg-transparent text-white',
          boxShadow && 'box-shadow',
          className,
        )}
      >
        {icon && (
          <Image alt="icon" className="h-4 w-4 object-contain" height={20} src={icon} width={20} />
        )}
        {children && <span className="whitespace-nowrap">{children}</span>}
      </Link>
    );
  }

  return (
    <div
      className={clsx(
        'bg-primary flex w-fit cursor-pointer items-center justify-start gap-2 rounded-full px-4.5 py-3 text-sm font-bold text-black',
        outline && 'border-white-second border bg-transparent text-white',
        boxShadow && 'box-shadow',
        className,
      )}
    >
      {icon && (
        <Image alt="icon" className="h-6 w-4.5 object-contain" height={20} src={icon} width={20} />
      )}
      {children && <span className="whitespace-nowrap">{children}</span>}
    </div>
  );
}
