import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/features/userSlice';

function CreateEvents() {

    const token=useSelector(selectUser);

    const [events,setEvents]=useState([]);

    const [previewSource,setPreviewSource]=useState("");
    const [image,setImage]=useState(null);

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [startsat,setStartsAt]=useState("");
    const [endsAt,setEndsAt]=useState("");

    const [message,setMessage]=useState("");
    const [error,setError]=useState("");

    const [notfound,setNotFound]=useState("");



    const[changeerror,setChangeError]=useState(null);
    const [success,setSuccess]=useState(null);









const handleFileInputChange=(e)=>{

    const file=e.target.files[0];
    
    previewFile(file)
        }
    
    
        const previewFile=(file)=>{
    
          // FileReader is a in-built object to asynchronously read the content of files stored in the user computer
          const reader=new FileReader();
    
          // this readAsDataURl will convert the image we pass into a string
          reader.readAsDataURL(file);
          reader.onloadend=()=>{
            setPreviewSource(reader.result);
            setImage(reader.result);
            // console.log(reader.result);
          }
        }



const handleEvents=async(e)=>{


    const data={
        name,
        description,
        image,
        startTime:startsat,
        endTime:endsAt,
        pic:image

    }

    e.preventDefault();

    const response=await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/events/add-events",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(data),

    });

    const json=await response.json();

    if(response.ok){
setMessage(json.message)
setError(null);
setName("");
setDescription("");
setStartsAt("");
setEndsAt("");
setImage("");
setPreviewSource("");
document.getElementById("image").value="";

setTimeout(() => {
    setMessage("");
}, 3000);
    }

    if(!response.ok){
        setError(json.error);
        setMessage(null);
    }
}


const markAsCompleted=async(id)=>{

    const response=await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/events/mark-complete/"+id,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })

    const json=await response.json();

    if(!response.ok){
        setChangeError(json.error);
        setSuccess(null);
    }
    if(response){
        setChangeError(null)
        setSuccess(json.message)


    }

}


useEffect(()=>{


    const fetchEvents=async()=>{
    
        const response=await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/events/active-events",{
            method:"GET",
        })

        const json=await response.json();

        if(response.ok){
           
              
    
            setEvents(json.events);
        }
        if(!response.ok){
            setEvents([]);
        }
    
    
}

    fetchEvents();
},[handleEvents,markAsCompleted])



  return (
<div className="container create-events">

<div className="container view-events">
    <h1 className='text-warning'>Active Events</h1>
    {error && <div>Error: {error}</div>}
    <div className="container">
       {
        events.length > 0 ? (<div className='container'>

            {
                events.map((ev)=>(
                    <div className="container-fluid flex justify-content-around align-items-start" key={ev._id} style={{backgroundColor:"#efefefef",marginTop:"10px"}}>
                  
                    <li style={{fontWeight:"bold",fontSize:"20px",listStyle:"none"}}>{ev.name}</li>
                     <button className='btn btn-danger' onClick={()=>markAsCompleted(ev._id)}>Mark as Completed</button>
                  
                    </div>
                    
                ))
            }
              {success && <p>{success}</p>}
        </div>):(<h1>No Active Events</h1>)
       }
    </div>


    <div className="container">
        <div className="container">
        <h1 className='text-info'>Add Events</h1>
        </div>

        <form onSubmit={handleEvents}>
        <label>
              <h6>
                Event Name:
              </h6>
            </label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
        <label>
              <h6>
                Event Description:
              </h6>
            </label>
            <input
              type="text"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
        <label>
              <h6>
                Event Starts at:
              </h6>
            </label>
            <input
              type="text"
              value={startsat}
              required
              onChange={(e) => setStartsAt(e.target.value)}
            />
        <label>
              <h6>
                Event Ends at:
              </h6>
            </label>
            <input
             type='text'
              value={endsAt}
              required
              onChange={(e) => setEndsAt(e.target.value)}
            />
  <label htmlFor="imgUrl" style={{ display: 'block', marginBottom: '5px' }}>Event Poster</label>
  <input type="file" name="image" id="image" onChange={handleFileInputChange} style={{ marginBottom: '10px', width: '100%' }}/>

  <button className='btn btn-primary'>Create</button>

  <div className="d-flex justify-content-center align-items-end" style={{height:"50px"}}>
    <div className='error'>
 {error && <h4 className='text-danger'>{error}</h4>}
 </div>
 {message &&
 
    <h3 className='text-success'>{message}</h3>

   
    }
 </div>
        
        </form>

        

        <div className="preview" style={{height:"100px", margin:"20px"}} >
{previewSource ? <img src={previewSource} alt='image' style={{height:"200px",border:"1px solid green"}}></img>: <div className='d-flex' style={{height:"120%",width:"100%",border:"1px solid black",textAlign:"center",alignItems:"center"}}>No Image Selected</div>}
</div>
    </div>
</div>
</div>
  )
}

export default CreateEvents
