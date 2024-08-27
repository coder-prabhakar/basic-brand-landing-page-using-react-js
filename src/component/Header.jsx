import BrandImage from '../img/brand-logo.png'

export default function Header() {
    return (
      <header className='Header'>
          <img src={BrandImage} className='brand-img' alt="brand-logo" />
          <nav>
            {
                ["MENU","LOCATION","ABOUT","CONTACT"].map((value,index)=>
                    <a href="#" key={index}>{value}</a>
                )
            }
          </nav>
          <button>Login</button>
      </header>
    )
  }