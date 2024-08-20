import React from 'react'
import '../../styles/Welcome.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/features/userSlice'
import { Link } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Headroom from 'react-headroom';


function Welcome() {

  const user = useSelector(selectUser);





  return (
    // <div className="container custom-welcome">
    //   <div className="d-flex flex-column text-center">
    //     <h1 class="text-warning font-weight-bold text-center">
    //       Welcome to Royal Naan Curry <br /> & <br /> Cafe
    //     </h1>
    //     <p className='text-muted text-center text-md-left'>Contemporary Indian Cuisine with freshly local produce
    //       and constantly inventing creative platters
    //     </p>


    //     {user ?
    //       (<Link to="/order-online"><div className="order-online">
    //         <button type="button" className="btn btn-warning">Order Online</button>
    //       </div></Link>)
    //       :
    //       (<Link to="/login"> <div className="order-online">
    //         <button type="button" className="btn btn-warning">Order Online</button>
    //       </div></Link>
    //       )}

    //   </div>
    // </div>

    <section
    className="bg-center bg-no-repeat min-vh-100"
    style={{
      backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/08/76/53/93/1000_F_876539396_78Afzlot89U25BWOreL4GiFth5v0pbxV.jpg')",
      backgroundColor: 'rgba(55, 65, 81, 0.75)',
      backgroundBlendMode: 'multiply',
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition:'center'
    }}
  >

<Headroom>
      <Navbar />

      </Headroom>
    
 
    <div className="container text-center py-5 py-lg-6">
      <h1 className="mb-4 mt-5 display-4 fw-bold text-white">
        Welcome to Royal Naan Curry & Cafe
      </h1>
      <p className="mb-8 lead" style={{ color: "rgba(255, 255, 255, 0.8)"}}>
        Contemporary Indian Cuisine with freshly local produce
        <br />
        and constantly inventing creative platters
      </p>
      <div className="d-flex flex-column gap-3 flex-sm-row justify-content-center">
        <Link to={"/order-online"}
          href="#"
          className="btn btn-warning btn-lg d-flex align-items-center justify-content-center fw-bold text-black"
        >
          Order Online
          <svg
            className="ms-2"
            width="14"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 10"
            aria-hidden="true"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
        <Link to={"/order-online"}
          href="#"
          className="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center"
        >
          See Menu
        </Link>
      </div>
    </div>
  </section>



  )
}

export default Welcome
