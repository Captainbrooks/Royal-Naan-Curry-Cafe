import React ,{useState} from 'react'
import "../../styles/AdminDashBoard.css"
import { Link } from 'react-router-dom';

function AddFood() {


    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");



    const [previewSource,setPreviewSource]=useState("");
    const [image,setImage]=useState(null);

  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const [message,setMessage]=useState("");
  const [error,setError]=useState("");
  const [errorFields,setErrorFields]=useState([]);







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

  const handleMenuTypeChange = (event) => {
    setSelectedMenuType(event.target.value);
    // Reset subcategory when menu type changes
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };






const handleSubmit=async(e)=>{
    e.preventDefault();


const data={
    name,
    price,
    description,
    image,
  menuType:  selectedMenuType,
   subcategory: selectedSubcategory   
}

console.log("Add food is clicked..")

try {
    const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/fooditem`,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })

  

    const json= await response.json();

    if(!response.ok){
        setErrorFields(json.errorField);
        setError(json.error);
      
    }
    else{
 setMessage(json.message);
 setErrorFields([])


 setName("");
 setPrice("");
 setDescription("");
 document.getElementById("image").value = "";
 setSelectedMenuType("");
setSelectedSubcategory("")

setError(null);
setImage(null)
setPreviewSource(null);

setTimeout(() => {
    setMessage("");
}, 3000);


    }
} catch (error) {
    console.log(error)
}

}


  return (
<div className="container d-flex flex-column justify-content-around add-food">
<h1 className='text-warning'>Add Food</h1>
<div className="container d-flex justify-content-around">
   
<form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
  <label htmlFor="foodName" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
  <input type="text" name="foodName" id="foodName" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px', padding: '5px', width: '100%' }} className={errorFields.includes('name') ? 'error':''} />

  <label htmlFor="foodPrice" style={{ display: 'block', marginBottom: '5px' }}>Price</label>
  <input type="number" name="foodPrice" id="foodPrice" value={price} onChange={(e) => setPrice(e.target.value)} style={{ marginBottom: '10px', padding: '5px', width: '100%' }}  className={errorFields.includes('price') ? 'error':''}/>

  <label htmlFor="foodDescription" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
  <textarea name="foodDescription" id="foodDescription" cols="5" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} style={{ marginBottom: '10px', padding: '5px', width: '100%' }}  className={errorFields.includes('description') ? 'error':''}></textarea>

  <label htmlFor="imgUrl" style={{ display: 'block', marginBottom: '5px' }}>Image</label>
  <input type="file" name="image" id="image" onChange={handleFileInputChange} style={{ marginBottom: '10px', width: '100%' }}  className={errorFields.includes('fileStr') ? 'error':''}/>

  <label htmlFor="menuType" style={{ display: 'block', marginBottom: '5px' }}>Menu Type</label>
  <select name="selectOption" id="selectOption" value={selectedMenuType} onChange={handleMenuTypeChange} style={{ marginBottom: '10px', padding: '5px', width: '100%' }} className={errorFields.includes('menuType') ? 'error':''}>
    <option value="">Select...</option>
    <option value="Starter Menus">Starter Menus</option>
    <option value="Main Courses">Main Courses</option>
    <option value="Traditional Breads">Traditional Breads</option>
    <option value="Drink Menu">Drink Menu</option>
    <option value="Desert Menu">Desert Menu</option>
  </select>

  {selectedMenuType === "Main Courses" && (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="subcategory" style={{ display: 'block', marginBottom: '5px' }}>Subcategory</label>
      <select name="subcategory" id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange} style={{ marginBottom: '10px', padding: '5px', width: '100%' }} className={errorFields.includes('subcategory') ? 'error':''}>
        <option value="">Select...</option>
        <option value="Veg">Veg</option>
        <option value="Chicken">Chicken</option>
        <option value="Mutton">Mutton</option>
      </select>
    </div>
  )}

  {selectedMenuType === "Drink Menu" && (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="subcategory" style={{ display: 'block', marginBottom: '5px' }}>Subcategory</label>
      <select name="subcategory" id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange} style={{ marginBottom: '10px', padding: '5px', width: '100%' }} className={errorFields.includes('subcategory') ? 'error':''}>
        <option value="">Select...</option>
        <option value="Soft Drinks">Soft Drinks</option>
        <option value="Coffee & Tea">Coffee & Tea</option>
        <option value="Beverages">Beverages</option>
      </select>
    </div>
  )}

  <button type="submit" className='btn btn-primary' style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Submit</button>

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
{previewSource ? <img src={previewSource} alt='image' style={{height:"100px",border:"1px solid green"}}></img>: <div className='d-flex' style={{height:"120%",width:"100%",border:"1px solid black",textAlign:"center",alignItems:"center"}}>No Image Selected</div>}
</div>
</div>

</div>
  )
}

export default AddFood
