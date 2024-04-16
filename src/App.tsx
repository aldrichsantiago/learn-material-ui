import Button from '@mui/material/Button';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <div className='font-roboto'>
        <Button variant='contained' disableElevation disableTouchRipple>Hello</Button>
      </div>
    </>
  )
}

export default App
