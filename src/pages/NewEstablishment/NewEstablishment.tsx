import { useEffect } from 'react'

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
  return <div>New Establishment</div>
}
export default NewEstablishment
