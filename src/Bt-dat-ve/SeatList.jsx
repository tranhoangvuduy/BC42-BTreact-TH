import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SeatList() {
    const dispatch = useDispatch()

    const { seatList } = useSelector(state => state.seat)


    const handleClick = (hang, soGhe) => {
        dispatch({
            type: 'GHE_DANG_CHON',
            hang, soGhe
        })
    }

    return (
        <div className='seatRow'>
            {seatList.map((item) => {
                return (
                    <div className="row">
                        <span className='hangGhe'>{item.hang}</span>
                        {item.danhSachGhe.map((seat) => {
                            return (
                                <Fragment key={seat.soGhe}>
                                    <button
                                       
                                        className={seat.daDat ? "seat occupied" : seat.selected ? "seat selected" : "seat"}
                                        onClick={() => handleClick(item.hang, seat.soGhe)}
                                    >
                                    </button>
                                </Fragment>
                                
                            )
                        })}
                    </div>
                )
            })}
        </div>

    )
}

export default SeatList