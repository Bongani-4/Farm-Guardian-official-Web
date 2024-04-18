import  { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';

const AnimalCaretaker = () => {

  const [selectedCategory, setSelectedCategoryy]= useState(null);

  const [jobs,setJobs] = useState([]);


  useEffect(() => {

    fetch("jobs.json").then( res => res.json()).then(data => {
    
      setJobs(data)
    })
  },[])

  //  handling input data
  const [query, setQuery] = useState("");
  const handleInputChange = (event) =>
   { setQuery(event.target.value)
    
  }

  //  filtring jobs based on title

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  console.log(filteredItems);


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