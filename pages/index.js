import Head from 'next/head'
import Nav from '../components/Nav'
import Counter from '../components/Counter'
import Todo from '../components/Todo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foundations of Advanced Front-end - Home</title>
        <meta name="description" content="Assignment 1 - Home" />
      </Head>
      <Nav />
      <main className="container">
        <h1>Welcome to Foundations of Advanced Front-end</h1>
        <p>This small Next.js app demonstrates components, props, state, event handling, and conditional rendering.</p>

        <section className="card">
          <h2>Interactive Counter (component with its own state)</h2>
          <Counter initial={0} />
        </section>

        <section className="card">
          <h2>Todo List (component with state & events)</h2>
          <Todo />
        </section>
      </main>
    </>
  )
}
