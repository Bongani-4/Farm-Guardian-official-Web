import  { useState } from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';

const AnimalCaretaker = () => {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) =>
   { setQuery(event.target.value)
    
  }
  return (
    <div className="text-Green"> 
    <Navbar/>
       
           <div>
             <Banner query = {query} handleInputChange ={handleInputChange}/>    
            </div>
    </div>
    
  )
}

export default AnimalCaretaker