import React from 'react'
import {useState} from 'react'


const App = () => {
   const [searchTerm, setSearchTerm] = useState('')
   const [emojis, setEmojis] = useState([])
   

   function clickSearch(text){
     setSearchTerm(text)
     submit()
   }
   function submit() {
    if ( searchTerm === 'anger'){
      setEmojis(["😡", "😠", "😤","😤", "👿" ])
    }

    if ( searchTerm === 'love'){
      setEmojis(["🥰", "💕", "😍","👩‍❤️", "❤️", 
   "💌", ])
    }

    if ( searchTerm === 'yeah'){
      setEmojis(["👍", "🙄", "😎","👌", ])
    }
    
    if ( searchTerm === 'music'){
      setEmojis(["🎶", "🎼", "🎹","🎺", "🎙️" ])
    }

    if ( searchTerm === 'all emoji'){
      setEmojis(["🧐"])
    }

   }
  return (
    <div className='centering' >

      <div className='Search'>
          <input id='searchs' type='text' placeholder='Search emoji'  value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
          <button onClick={() => submit()} id='search'></button>
      </div>


      <div className='emojis-space'>
      {emojis.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
     

      <div className='text-space'>
        <p> Type a word like <a href='#' onClick={() => clickSearch("love")}> love</a> or <a href='#' onClick={() => clickSearch("yeah")}>yeah</a> or <a href='#' onClick={()=> clickSearch("music")}>music</a>  and we'll show you matching emoji. Or enter an emoji and we'll show you related ones</p>
      </div>

     

     
      <div style={{"display": "flex", "justifyContent": "space-between"}}>
          

            <div className='little-Name'>
      
            <div className='bottom'>
          <p>
            <a href='https://emoji-selector-rho.vercel.app/'>Emoji Finder</a>- Search emoji to copy & past into Facebook, twitter, Messenger or Slack

          
          </p>
        </div>

        <div className='bottom-down'>
          <span> Made by <a href='https://grahamhicks.com/'>Graham Hicks</a></span>
        </div>
            </div>
    


      <div className='colors-gender'>
        <div>
        <a id="color-0" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-1" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-2" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-3" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-4" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-5" className="colors" title="Reset skintones to yellow" href="#"></a>
        <a id="color-6" className="colors" title="Reset skintones to yellow" href="#"></a>
    
  
        <a id="color-7" title="Reset skintones to yellow" href="#"> <div className='gender-chose'></div></a>

        </div>
        
      </div>

      </div>
      </div>
    

    

  )
}

export default App
