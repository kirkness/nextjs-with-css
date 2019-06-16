import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div>
    <Link href="/page">
      <a className="card">
        Go to other page
      </a>
    </Link>
  </div>
)

export default Home
