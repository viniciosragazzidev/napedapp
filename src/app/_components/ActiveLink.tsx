import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
};

function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();
  const className = router.pathname === href ? 'active' : '';

  return (
    <Link href={href}>
      <a className={className + 'link'}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
