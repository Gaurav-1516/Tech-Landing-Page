import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillApple,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';


function Home() {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TeraByte Tech Services</h1>
                <p>One stop solution for your all tech problems...</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>We are your one and only solution to your tech problems. We are one of the leading tech solution providers. Our clients ranges from small agency to some of the MNCs.</p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo dolorum? Reiciendis numquam aspernatur natus ratione itaque dignissimos, inventore, dolor voluptate, sint enim veniam officia fugiat expedita eius culpa tempora quos distinctio fuga. Architecto nihil facilis quia? Minus expedita consectetur fugiat iste. Maiores eos, iste repudiandae eaque iusto eum sunt!</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.25s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s"
                    }}>
                        <AiFillApple/>
                        <p>Apple</p>
                    </div>
                    <div style={{
                        animationDelay: "0.75s"
                    }}>
                        <AiFillYoutube/>
                        <p>YouTube</p>
                    </div>
                    <div style={{
                        animationDelay: "1s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home