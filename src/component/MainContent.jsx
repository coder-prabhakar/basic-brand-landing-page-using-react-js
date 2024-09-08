import '../css/main.css';
import flipkart from '../img/flipkart-logo.png'
import amazon from '../img/amazon-logo.png'

function MainContent() {
  return (
    <secction className="MainContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className='text'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='btn-container'>
            <button>Shop Now</button>
            <button>Category</button>
        </div>
        <div className='ecommerce-container'>
            <p>Also Available On</p>
            <figure>
              <img width="30px" src={flipkart} alt="flipkart logo" />
              <img width="30px" src={amazon} alt="amazon logo" />
            </figure>
        </div>
    </secction>
  )
}

export default MainContent;