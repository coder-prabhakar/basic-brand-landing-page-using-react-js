import MainImage from '../img/main-img.png'

function MainImg() {
  return (
    <figure className='MainImg'>
        <img width="100%" style={{transform: "scale(1.3)"}} src={MainImage} alt="Shoes" />
    </figure>
  )
}

export default MainImg