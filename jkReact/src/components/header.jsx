import { Link } from 'react-router-dom';
import imgLogo from '@/assets/images/jk_logo_v2.png'

function Header() {
  return (
    <>
      <header className='header'>
        <div className="w1600">
          <h1 className="logo"><Link to="/"><img src={imgLogo} alt="로고이미지" /></Link></h1>
        </div>
      </header>
    </>
  )
}

export default Header
