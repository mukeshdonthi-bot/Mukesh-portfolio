import { createBrowserRouter } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Wantra from './pages/Wantra'
import Teamsync from './pages/Teamsync'
import DhwaniPay from './pages/DhwaniPay'
import InexSpaces from './pages/InexSpaces'
import About from './pages/About'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'projects', Component: Projects },
      { path: 'wantra', Component: Wantra },
      { path: 'teamsync', Component: Teamsync },
      { path: 'dhwani-pay', Component: DhwaniPay },
      { path: 'inex-spaces', Component: InexSpaces },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
    ],
  },
])
