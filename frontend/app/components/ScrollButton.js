'use client';

export default function ScrollButton({ href, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(href.slice(1)).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
} 