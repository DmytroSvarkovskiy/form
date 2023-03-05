import { lazy } from 'react'
import { GlobalStyle } from '../GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '.'
import { Dashboard } from '../pages'
const EstablishmentCurrent = lazy(
  () => import('../pages/EstablishmentCurrent/EstablishmentCurrent'),
)
const Categories = lazy(() => import('../pages/Categories/Categories'))
const CategoriesInModeration = lazy(
  () => import('../pages/CategoriesInModeration/CategoriesInModeration'),
)
const Customers = lazy(() => import('../pages/Customers/Customers'))
const Roles = lazy(() => import('../pages/Roles/Roles'))

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/establishments" element={<EstablishmentCurrent />} />
          <Route path="/in-moderation" element={<CategoriesInModeration />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
