import React from 'react'
import './Contactform.css'
import bgImage from "../../../Assets/cupcakes.jpeg"

const Contactform = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    Get in <span>touch</span>
                </h1>

                <p>Have some questions? <span className='special-word'>call us  at 9051039378 </span> or mail us to clear any doubts. </p>

                <img src={bgImage} alt="get in touch" />

                <p> Aspiring to help users feel like they are connecting with real people, not just a faceless brand.</p>

                <p>We love to hear from our adoring fans, but do fling tomatoes at our direction, if you must.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contactform