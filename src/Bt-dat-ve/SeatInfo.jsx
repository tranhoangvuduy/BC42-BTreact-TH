import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function SeatInfo() {
    const dispatch = useDispatch();

    const { seatSelected } = useSelector(state => state.seat)
    const handleDeleteTodo = (todoSoghe) => {
      dispatch({type: "todo/delete_todo", payload: todoSoghe});
    }
  
    return (
          <table className='table text-white' style={{fontSize: "17px"}}>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {seatSelected.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia.toLocaleString()}</td>
                    
                  </tr>
                )
              }
              )}
              <tr>
                <td><b>Tổng tiền</b></td>
                <td><b>{seatSelected.reduce((total, item) => {
                  return total += item.gia
                }, 0).toLocaleString()}</b></td>
                
              </tr>
            </tbody>
          </table>
    )
}

export default SeatInfo