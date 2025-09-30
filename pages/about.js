import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Assignment</title>
      </Head>
      <Nav />
      <main className="container">
        <h1>About This Assignment</h1>
        <p>This project contains multiple components (Counter, Todo, ContactForm) that each manage their own state. Props are used where appropriate.</p>

        <section className="card">
          <h2>Submission Notes</h2>
          <p>Use <code>npm install</code> then <code>npm run dev</code> to run locally. Build with <code>npm run build</code> before deploying.</p>
        </section>
      </main>
    </>
  )
}
