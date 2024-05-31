import { Provider } from 'react-redux'
import BarraLateral from './components/BarraLateral'
import Header from './components/Header'
import ListaContatos from './components/ListaContatos'
import { Container, EstiloGlobal } from './styles'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <section>
          <Header />
          <ListaContatos />
        </section>
      </Container>
    </Provider>
  )
}

export default App
