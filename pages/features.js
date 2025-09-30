import Head from 'next/head'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - Assignment</title>
      </Head>
      <Nav />
      <main className="container">
        <h1>Features Page</h1>
        <p>This page includes a form component that demonstrates event handling and conditional rendering.</p>

        <section className="card">
          <h2>Contact Form (form submission, local state)</h2>
          <ContactForm />
        </section>
      </main>
    </>
  )
}
