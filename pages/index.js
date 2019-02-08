import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

import Page from '../components/Page';

const PostLink = ({ id, name }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{ name }</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

        a {
        text-decoration: none;
        color: blue;
      }

        a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = ({ shows }) => (
  <Page>
    <h1>Batman TV shows</h1>
    <ul>
      { shows.map(({ show }) => (
        <PostLink key={ show.id } { ...show } />
      )) }
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Page>
);

Index.getInitialProps = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const shows = await response.json();

  console.log(`Show data fetched. Count: ${shows.length}`);

  return { shows };
};

export default Index;
