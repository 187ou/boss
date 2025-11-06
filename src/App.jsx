import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="bg-secondary text-gray-800 font-sans">
      <Outlet/>
    </div>
  );
}

export default App;