import './App.css'
import { Daniel } from './components/Daniel'
import { Jeanette } from './components/Jeanette'
import { Jonathan } from './components/Jonathan'
import { Kira } from './components/Kira'
import { Patrick } from './components/Patrick'


function App() {
  return (
    <div className='p-8 bg-grey100'>
      <Daniel />
      <Jonathan />
      <Jeanette />
      <Patrick />
      <Kira />
    </div>
  )
}

export default App
