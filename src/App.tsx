import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { ProductList } from './components/ProductList'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="gray" />
        <ProductList title="Em Breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
