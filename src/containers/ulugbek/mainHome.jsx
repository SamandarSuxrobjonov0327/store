import React from 'react'
import Imge from "./Image.png"
import Cards from "./Image1.png"
import Imge1 from "./spices1.png"
import Imge2 from "./spices2.png"
import Imge3 from "./spices3.png"
import Card2 from "./Image3.png"
import "./style.css"
import Nuqtalar from "./Line 1.png"
import Aka from "./aka.png"
import Baliq from "./CircleIcon.png"
import Baliq1 from "./CircleIcon1.png"
import Baliq2 from "./CircleIcon2.png"
import Avatar from "./Avatar.png"
import Belgi from "./Vector.png"
import Nok from "./Feature Image.png"
import Behi from "./Feature Image1.png"
import Avatar1 from "./Avatar1.png"
import Image from "./MenuCategory.png"
import Image1 from "./MenuCategory1.png"
import Image2 from "./MenuCategory2.png"
import Ava from "./Ava.png"


const MainHome = () => {
  return (
    <div>
      <div className="contanier">
        <div className="title">

          <div className="text">
            <h1>Healthy Eating <br />
              is important <br />
              part of lifestyle</h1>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
          </div>
          <div className="img">
            <img src={Imge} alt="" />
          </div>
        </div>

        <div className="rasmlar3">
          <img src={Imge1} alt="" />
          <img src={Imge2} alt="" />
          <img src={Imge3} alt="" />
        </div>

        <div className="cards">
          <div className="card">
            <img src={Cards} alt="" />
            <h1>Start to plan your diet today</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
          </div>
          <div className="card1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            <img src={Card2} alt="" />
          </div>
        </div>

      </div>

      <div className="menu">
        <div className="text1">
          <h1>
            Our Menu
          </h1>
          <p>This is a section of your menu. <br /> Give your section a brief description</p>


        </div>
        <div className="yozuvlar">
          <div className="yozuv1">
            <h3>$20</h3>
            <img src={Nuqtalar} alt="" />
            <h2>Deep Sea Snow  White <br />Cod Fillet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="yozuv1">
            <h3>$22</h3>
            <img src={Nuqtalar} alt="" />
            <h2>Steak With Rosemary <br /> Butter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="yozuv1">
            <h3>$18</h3>
            <img src={Nuqtalar} alt="" />
            <h2>Cucumber Salad</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="yozuv1">
            <h3>$90</h3>
            <img src={Nuqtalar} alt="" />
            <h2>Natural Wine Pairing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>

      <div className="icons">
        <div className="akabor">
          <img src={Aka} alt="" />
        </div>
        <div className="matn">
          <h1>Excellent cook</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
        </div>
      </div>

      <div className="baliqlar">
        <div className="baliq">
          <img src={Baliq} alt="" />
          <h3>Premium Quality</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>

        </div>
        <div className="baliq">
          <img src={Baliq1} alt="" />
          <h3>Seasonal Vegetables</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>

        </div>
        <div className="baliq">
          <img src={Baliq2} alt="" />
          <h3>Fresh Fruit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>

        </div>
      </div>



      <div className="navigation">
        <div className="sanjar">
          <img src={Nok} alt="" />
          <div className="user">
            <img src={Avatar} alt="" />
            <p>Julie Christie </p>
            <p>October 17,2021</p>
            <p>3:33 pm</p>
            <p>2 comments</p>
          </div>
          <h1>Fruit and vegetables and <br /> protection against diseases</h1>
          <img src={Nuqtalar} alt="" />
          <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>Read More <img style={{ width: "60px" }} src={Belgi} alt="" /></button>
        </div>
        <div className="sanjar">
          <img src={Behi} alt="" />
          <div className="user">
            <img src={Avatar1} alt="" />
            <p>Julie Christie </p>
            <p>October 17,2021</p>
            <p>3:33 pm</p>
            <p>2 comments</p>
          </div>
          <h1>Fruit and vegetables and <br /> protection against diseases</h1>
          <img src={Nuqtalar} alt="" />
          <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button >Read More <img style={{ width: "60px" }} src={Belgi} alt="" /></button>
        </div>
      </div>

      <div className="menular">
        <div className='salom'>
          <h1>
            Make a Reservation
          </h1>
          <p>Get in touch with restaurant</p>
        </div>

        <div className="inputlar">
          <div>
            <p>16/22/2021</p>
          </div>
          <div>
            <p>6:00 pm</p>
          </div>
          <div>
            <p>2 Person</p>
          </div>
        </div>
        <button>Book Now</button>
      </div>



      <div className="energi">
        <div className="ullar">
          <h1>Calories Energy <br /> Balance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="images">
          <img src={Image} alt="" />
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
        </div>
      </div>


      <div className="oxiri">
        <div className="lorem">
          <h3>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.</h3>
          <div className="avatar">
            <div className="ava">
              <img src={Ava} alt="" />
              <div><h4>John Doe</h4>
                <p>Bloger</p>
              </div>
            </div>


            <div className="belgilar">
              <div>
                <img className='nali' src={Belgi} alt="" />
              </div>
              <div>
                <h2>2 / 3</h2>
              </div>
              <div>
                <img src={Belgi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainHome