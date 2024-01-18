import { invoke } from '@tauri-apps/api/core';
import { Button } from './components/ui/button';
import WindowTitlebar from './components/titlebar/window-titlebar';

function App() {
  return (
    <>
      <WindowTitlebar />
      <div className='container'>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <Button>안녕</Button>
      </div>
    </>
  );
}

export default App;
