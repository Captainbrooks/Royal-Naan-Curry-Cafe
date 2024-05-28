import React from 'react'
import '../../styles/Welcome.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/features/userSlice'
import { Link } from 'react-router-dom'

function Welcome() {

  const user = useSelector(selectUser);





  return (
    <div className="container custom-welcome">
      <div className="d-flex flex-column text-center">
        <h1 class="text-warning font-weight-bold text-center">
          Welcome to Royal Naan Curry <br /> & <br /> Cafe
        </h1>


        <p className='text-muted text-center text-md-left'>Contemporary Indian Cuisine with freshly local produce
          and constantly inventing creative platters
        </p>





        {user ?
          (<Link to="/order-online"><div className="order-online">
            <button type="button" className="btn btn-warning">Order Online</button>
          </div></Link>)
          :
          (<Link to="/login"> <div className="order-online">
            <button type="button" className="btn btn-warning">Order Online</button>
          </div></Link>
          )}

      </div>
    </div>


  )
}

export default Welcome
