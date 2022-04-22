import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { Outlet, useLocation } from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  const location = useLocation()
  return (<>
  <ResponsiveAppBar />
  <Outlet location={location} key={location.pathname} />
  </>
  );
}

export default App;
