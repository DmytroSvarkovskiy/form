import { HeaderStyled, LogoWrapper } from './Header.styled'
import { Container } from '../Container'
export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <LogoWrapper>LOGO</LogoWrapper>
        <div>
          <input />
        </div>
        <div>Test</div>
      </Container>
    </HeaderStyled>
  )
}
