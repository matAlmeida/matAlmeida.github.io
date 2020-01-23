import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const myUses = [
  {
    title: 'Main Computer',
    content: 'Dell Inspiron 7572 15\"',
  },
  {
    title: 'OS',
    content: 'MacOS Mojave',
  },
  {
    title: 'Editor',
    content: <a href="https://code.visualstudio.com/">Visual Studio Code</a>,
  },
  {
    title: 'Theme',
    content: 'Dracula',
  },
  {
    title: 'Font',
    content: 'Operator Mono',
  },
  {
    title: 'Blog',
    content: 'Gatsby, hosted by Netlify',
  },
  {
    title: 'Tabs',
    content: '\\t',
  },
]

const Line = ({title, content}) => (
  <div>
    <span><strong style={{color: "#FFC600"}}>{title}: </strong>{content}</span>
  </div>
)

const renderUses = () => (
  myUses.map(uses => <Line key={uses.title} title={uses.tilte} content={uses.content} />)
)

const SecondPage = () => (
  <Layout>
    <h1>What I Uses:</h1>
    {renderUses()}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
