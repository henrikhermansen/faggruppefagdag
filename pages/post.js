import React from 'react';
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown';

import Page from '../components/Page';

const Post = ({ show }) => (
  <Page>
    <h1>{ show.name }</h1>
    <p>{ show.summary.replace(/<[/]?\w>/g, '') }</p>
    <img src={ show.image.medium } />
  </Page>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
