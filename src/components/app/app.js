import Header from '../Header/Header';
import './app.css';
import React from 'react';
import Stend from '../stend/stend';
import Games from '../games/games';
import Inform from '../inform/inform';
import Footer from '../footer/footer';
const App=()=>{

  return (
<div>
  <Header/>
  <Stend/>
  <Games/>
  <Inform/>
  <Footer/>
</div>
  )
}
export default App;