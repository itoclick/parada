
import  { React, useContext, useState } from 'react'
import { ofertas } from '../../middleWare/Contextos.js'
import './Slideoferta.css'


const seta ='../../imgs/chevron.png'


const SlideOferta = () => {
    
    const o = useContext(ofertas)
    const [show, setShow] = useState(o)
    
    
   
        
        console.log(show)

        return( 
        
            <>

                <div className="container">
                    <div className="carousel-slide">
                        {show.map((i)=>{
                            const { id, nomeOferta, sobre } = i
                        
                            return(

                        
                                <div className="item" key={toString(id)} >
                                
                                    <h1> {nomeOferta} </h1>
                                    <p> {sobre} </p>
                        
                                    <div className="btn-box">
                                        <a href="index.html" className="btn1">Fazer pedido</a>
                                    </div>
                        
                                </div>
                            )
                            
                        })};
                    </div>      
                    
                </div>
                <div className='buttonsContainer'>
                    <button className='btnDireita'>
                        <img src={seta} alt="seta direita" />
                    </button>
                        
                   
                    
                        <button><img src={seta} alt='teste'/>ok</button>
                    
                </div>
                
            </>
            

        )

    
    
}


export default SlideOferta;