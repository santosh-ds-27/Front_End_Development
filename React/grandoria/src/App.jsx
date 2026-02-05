import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Amenities from './Website/Pages/Amenities'
import Location from './Website/Pages/Location'
import Contact from './Website/Pages/Contact'
import Booking from './Website/Pages/Booking'
import Events from './Website/Pages/Events'
import Gallery from './Website/Pages/Gallery'
import Room from './Website/Pages/Room'
import Privacy from './Website/Pages/Privacy'
import Restaurant from './Website/Pages/Restaurant'
import RoomDetails from './RoomDetails'
import Offers from './Website/Pages/Offers'
import Term from './Website/Pages/Term'
import Not404 from './Website/Pages/Not404'
import Start from './Website/Pages/Start'
import Dashboard from './Admin/Apages/Dashboard'
import RoomManage from './Admin/Apages/RoomManage'
import Addroom from './Admin/Apages/Addroom'
import AmitiAdd from './Admin/Apages/AmitiAdd'
import AminitesMan from './Admin/Apages/AminitesMan'
import Alogin from './Admin/Apages/Alogin'
import Registration from './Website/Pages/user/Registration'
import UserLogin from './Website/Pages/user/UserLogin'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/amentities" element={<Amenities />} />
          <Route path='/room' element={<Room />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/roomdetails' element={<RoomDetails />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/term' element={<Term />} />
          <Route path='/start' element={<Start />} />
          <Route path='/reg' element={<Registration />} />
          <Route path='/user' element={<UserLogin />} />
          <Route path='/*' element={<Not404 />} />



          {/* admin */}/

          <Route path='/dash' element={<Dashboard />} />
          <Route path='/roommanage' element={<RoomManage />} />
          <Route path='/addroom' element={<Addroom />} />
          <Route path='/AmitiAdd' element={<AmitiAdd />} />
          <Route path='/Amiti' element={<AminitesMan />} />
          <Route path='/Alogin' element={<Alogin />} />
          


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
