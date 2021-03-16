import React from 'react'
import User from '../../img/images.png'

const About = () =>{

    return(
        <>
            <div>
                <h1>Sobre mi</h1>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'500px'}}>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore deserunt velit est vel culpa, amet reiciendis quis quae ab minus tempore facilis eaque expedita tenetur pariatur rem ex nam voluptatem. Autem sit rem, reiciendis similique debitis consequuntur eaque, cupiditate voluptate dolor ullam eius possimus sunt non eligendi assumenda, ab ducimus!</p>
                    </div>
                    <div>

                    <img src={User} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
