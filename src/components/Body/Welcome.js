import React from 'react'
import '../../styles/Welcome.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/features/userSlice'
import { Link } from 'react-router-dom'

function Welcome() {

  const user = useSelector(selectUser);


  return (
    <div className="body-container1">
      <div className="welcome">
        <h1>Welcome to Royal Naan Curry <br /> & <br />Cafe</h1>

        <span>Contemporary Indian Cuisine with freshly local produce
          and constantly inventing creative platters
        </span>

        {user ?
          (<Link to="/order-online"><div className="order-online">
            <button type="button" className="btn btn-primary">Order Online</button>
          </div></Link>)
          :
          (<Link to="/login"> <div className="order-online">
            <button type="button" className="btn btn-primary">Order Online</button>
          </div></Link>
          )

        }



      </div>
    </div>


  )
}

export default Welcome
