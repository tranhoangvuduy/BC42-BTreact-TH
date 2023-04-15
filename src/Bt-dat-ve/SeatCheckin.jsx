import React from 'react'
import './style.scss'
import SeatList from './SeatList'
import SeatInfo from './SeatInfo'

function SeatCheckin() {
  return (
    <div className="container">
    <h1 className="text-center">Đặt vé xem phim Cyber Learn</h1>
    
    <div className="showcaseContainer mt-3">
      <ul className="showcase">
        <li>
          <span className="seat" /> <small>Empty Seat</small>
        </li>
        <li>
          <span className="seat selected" /> <small>Selected Seat</small>
        </li>
        <li>
          <span className="seat occupied" /> <small>Reserved Seat</small>
        </li>
      </ul>
    </div>
    <div className="cinema">
       
        <SeatList />
    </div>
    <div className="mt-5">
      <h3 className='text-center'>Danh sách ghế bạn đã chọn</h3>
      <SeatInfo />
    </div>
</div>
  )
}

export default  SeatCheckin