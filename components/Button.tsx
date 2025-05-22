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
  position = 'left',
}: {
  children?: React.ReactNode;
  icon?: string;
  boxShadow?: boolean;
  outline?: boolean;
  className?: string;
  asLink?: boolean;
  href?: string;
  position?: 'left' | 'right';
}) {
  const buttonContent = (
    <>
      {icon && position === 'left' && (
        <Image alt="icon" className="h-4 w-4 object-contain" height={20} src={icon} width={20} />
      )}
      {children && <span className="whitespace-nowrap">{children}</span>}
      {icon && position === 'right' && (
        <Image alt="icon" className="h-4 w-4 object-contain" height={20} src={icon} width={20} />
      )}
    </>
  );

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
        {buttonContent}
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
      {buttonContent}
    </div>
  );
}
