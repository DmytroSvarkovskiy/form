import { AppBar, Container } from '../index'
import { Section, LayoutWrap } from './Layout.styled'
import { Header } from '../index'
import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'
export const Layout: React.FC = () => {
  return (
    <LayoutWrap>
      <Section>
        <Header />
        <Container>
          <AppBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </LayoutWrap>
  )
}
