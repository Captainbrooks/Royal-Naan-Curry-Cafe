import React, { useEffect, useState } from 'react';

function AddFoodForm() {

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [fileInputState,setFileInputState]=useState(null);

    const [selectedFile,setSelectedFile]=useState("");
    const [previewSource,setPreviewSource]=useState("");
    const [image,setImage]=useState(null);

  const [selectedMenuType, setSelectedMenuType] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const [message,setMessage]=useState("");

  const [fetchData,setFetchData]=useState([]);





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

console.log(data);


try {
    const response=await fetch("http://localhost:4000/api/v1/fooditem",{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })

    if(!response.ok){
        console.log("Bad response");
    }

    const info=await response.json();
    console.log(info);
} catch (error) {
    console.log(error)
}

}

  return (





<>
      <form onSubmit={handleSubmit}>

        
     

        <label htmlFor="foodName">Name</label>
        <input type="text" name="foodName" id="foodName" value={name} onChange={(e)=>setName(e.target.value)} />

        <label>Price</label>
        <input type="number" name="foodPrice" id="foodPrice" value={price} onChange={(e)=>setPrice(e.target.value)} />

        <label htmlFor="foodDescription">Description</label>
        <textarea name="foodDescription" id="foodDescription" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

        <label htmlFor="imgUrl">Image</label>
        <input type="file" name="image" id="image" value={fileInputState} onChange={handleFileInputChange} />


        <label htmlFor="menuType">Menu Type</label>
        <select name="selectOption" id="selectOption" value={selectedMenuType} onChange={handleMenuTypeChange}>
          <option value="">Select...</option>
          <option value="Starter Menus">Starter Menus</option>
          <option value="Main Courses">Main Courses</option>
          <option value="Traditional Breads">Traditional Breads</option>
          <option value="Drink Menu">Drink Menu</option>
          <option value="Desert Menu">Desert Menu</option>
        </select>

        {selectedMenuType === "Main Courses" && (
          <div>
            <label htmlFor="subcategory">Subcategory</label>
            <select name="subcategory" id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}>
              <option value="">Select...</option>
              <option value="Veg">Veg</option>
              <option value="Chicken">Chicken</option>
              <option value="Mutton">Mutton</option>
            </select>
          </div>
        )}

        {selectedMenuType === "Drink Menu" && (
          <div>
            <label htmlFor="subcategory">Subcategory</label>
            <select name="subcategory" id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}>
              <option value="">Select...</option>
              <option value="Soft Drinks">Soft Drinks</option>
              <option value="Coffee & Tea">Coffee & Tea</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>






      {previewSource && <img src={previewSource} alt='chosen' style={{height:"300px"}}></img>}
    
      </>
  )
}

export default AddFoodForm;
