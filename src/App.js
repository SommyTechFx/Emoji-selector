import React from 'react'

const App = () => {
  return (
    <div className='centering' >
      <div className='Search'>
          <input className='willy' id='search' type='text' placeholder='Search emoji'></input>
          <button>😆</button>
      </div>

      <div className='text-space'>
        <p> Type a word like <a href='#'>love</a> or <a href='#'>yeah</a> or <a href='#'>music</a>  and we'll show you matching emoji. Or enter an emoji and we'll show you related ones</p>
      </div>

     
      <div className='bottom'>
        <p>
          <a href='#'>Emoji Finder</a>- Search emoji to copy & past into Facebook, twitter, Messenger or Slack

         
        </p>
      </div>

      <div className='bottom-down'>
         <span> Made by <a href='#'>Graham Hicks</a></span>
      </div>
    </div>

    

  )
}

export default App
