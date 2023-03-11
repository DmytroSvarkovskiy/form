import { lazy } from 'react'
import { GlobalStyle } from '../GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '.'
import { Dashboard } from '../pages'
const EstablishmentCurrent = lazy(
  () => import('../pages/EstablishmentCurrent/EstablishmentCurrent'),
)
const Bookings = lazy(() => import('../pages/Bookings/Bookings'))
const NewEstablishment = lazy(
  () => import('../pages/NewEstablishment/NewEstablishment'),
)
const Categories = lazy(() => import('../pages/Categories/Categories'))
const EstablishmentPending = lazy(
  () => import('../pages/EstablishmentPending/EstablishmentPending'),
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
          <Route path="/new-establishment" element={<NewEstablishment />} />

          <Route path="/bookings" element={<Bookings />} />
          <Route path="/pending" element={<EstablishmentPending />} />
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
