import { AppLink } from './AppBar.styled'
import { Nav, AppBarWrapper } from './AppBar.styled'
export const AppBar: React.FC = () => {
  return (
    <AppBarWrapper>
      <Nav>
        <AppLink to="/">Dashboard</AppLink>
        <div>
          {' '}
          Establishments
          <div>
            <AppLink to="/establishments">Current</AppLink>
          </div>
          <div>
            {' '}
            <AppLink to="/in-moderation">In moderation</AppLink>
          </div>
        </div>
        <AppLink to="/categories">Categories</AppLink>
        <AppLink to="/customers">Customers</AppLink>
        <AppLink to="/roles">Roles</AppLink>
      </Nav>
    </AppBarWrapper>
  )
}
