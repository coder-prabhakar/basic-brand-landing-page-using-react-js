import '../css/main.css';
import MainImage from '../img/main-img.png'

function MainImg() {
  return (
    <figure className='MainImg'>
        <img width="100%" src={MainImage} alt="Shoes" />
    </figure>
  )
}

export default MainImg