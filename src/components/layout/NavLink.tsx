import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavLink({ to, children, mobile }: NavLinkProps) {
  const baseStyles = "text-gray-700 hover:text-blue-600 transition-colors duration-200 ";
  const mobileStyles = mobile 
    ? "block px-3 py-2 text-base font-medium"
    : "text-sm font-medium";

  return (
    <Link to={to} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </Link>
  );
}