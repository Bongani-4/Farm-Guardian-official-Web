import  { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Card from "../components/Card";
import Jobs from "./Jobs";

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

  //   Radio buttons filtering

  const handleChange = (event) => {
    setSelectedCategoryy(event.target.value)
  }


  //   salary button filtering

  const handleClick = (event) => {
        setSelectedCategoryy(event.target.value)
  }


  //   main fuction
   const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //   filtering input items
       if(query){
       filteredJobs = filteredItems;
       }

       //category filtering 
       if(selected)
       {
         filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType,employmentType
        , postingDate}) =>(

          jobLocation.toLowerCase() === selected.toLowerCase() || parseInt(maxPrice) <= parseInt(selected)
          || salaryType.toLowerCase() === selected.toLowerCase()
          || employmentType.toLowerCase() === selected.toLowerCase()


         ));
         console.log(filteredJobs);

       }
       return filteredJobs.map((data, i) => <Card key={i}  data= {data}/> )

   }
   const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-Green"> 
    <Navbar/>
       
           <div>
             <Banner query = {query} handleInputChange ={handleInputChange}/>    
               <div>
                    <Jobs result ={result}/>
               </div>
            </div>
    </div>
    
  )
}

export default AnimalCaretaker