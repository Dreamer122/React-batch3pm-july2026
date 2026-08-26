import { AccountForm } from './AccountForm'

import './App.css'
import { Summary } from './Summary'

function App() {

  return (
    <>
    <div className='flex flex-wrap gap-5'>
      <div className='bg-pink-300 w-1/3'>
        <Summary/>
      </div>
      <div className='bg-pink-700 w-1/3'>

      <AccountForm/>
      </div>
    </div>
    </>
  )
}

export default App
