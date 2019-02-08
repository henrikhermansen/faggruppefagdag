import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: '15px',
};

const Navigation = () => (
  <nav>
    <Link href="/">
      <a style={ linkStyle }>Home</a>
    </Link>
    <Link href="/about">
      <a style={ linkStyle }>About</a>
    </Link>
  </nav>
);

export default Navigation;
