import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import './fanta.css'

const App = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Grid />
      </main>
    </Layout>
  )
}

export default App;