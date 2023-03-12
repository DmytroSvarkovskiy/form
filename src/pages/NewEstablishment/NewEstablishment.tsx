import { useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { HeadingWrap } from '../EstablishmentCurrent'
import {
  NewEstablishmentWrap,
  SubmitBtn,
  FormAdd,
  InputCustom,
} from './NewEstablishment.styled'
import { BackLink } from './NewEstablishment.styled'
import { PageWrapper } from '../../components'

const NewEstablishment: React.FC = () => {
  useEffect(() => {
    document.getElementById('visible')?.childNodes!
    const activeLink =
      document.getElementById('visible')?.parentNode?.children[1].children[0]
        .children[0]
    activeLink?.classList.add('activePage')
    return () => {
      activeLink?.classList.remove('activePage')
    }
  }, [])

  return (
    <NewEstablishmentWrap>
      <HeadingWrap>
        {' '}
        <BackLink to="/establishments">
          <IoIosArrowBack />
          <p> New Establishment</p>
        </BackLink>
      </HeadingWrap>
      <PageWrapper>
        <FormAdd>
          <SubmitBtn type="submit">Publish</SubmitBtn>
          <div>
            <p>Basic information</p>
            <label htmlFor="title">Title</label>
            <InputCustom placeholder="Write product name" id="title" />
          </div>
          <div>
            <p>Organization</p>
          </div>
        </FormAdd>
      </PageWrapper>
    </NewEstablishmentWrap>
  )
}
export default NewEstablishment
