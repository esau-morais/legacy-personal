import Link from 'next/link'
import React from 'react'
import { Layout } from '../components'

const NotFound = () => {
  return (
    <Layout className="text-center">
      <h1 className="text-5xl font-bold text-rose-50/80">
        404 &#8208; Not Found
      </h1>
      <p className="my-4 text-lg text-rose-50/80">
        This page doesn&lsquo;t exist or was removed &#128533;
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold uppercase tracking-widest transition ease-in-out duration-150 bg-gradient-to-tl from-blue-400/80 to-purple-600/80 text-white text-md mt-4">
        
          Go back home
        
      </Link>
    </Layout>
  );
}

export default NotFound
