import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Card from "../components/Card";
import Jobs from "./Jobs";
import { FiSidebar } from "react-icons/fi";
import SidesBar from "../sidebar/SidesBar";

const AnimalCaretaker = () => {

  const [selectedCategory, setSelectedCategoryy] = useState(null);

  const [jobs, setJobs] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  const [curentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;


  useEffect(() => {
    setisLoading(true);

    fetch("jobs.json").then(res => res.json()).then(data => {

      setJobs(data);
      setisLoading(false);
    })
  }, [])

  //  handling input data
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)

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

  /**calculate  index range */
  const calculatePagerange = () => {
    const startIndex = (curentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }
  /**function to next page */
  const nextPage = () => {
    if (curentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(curentPage + 1);
    }

  }


  /**function to previous page */
  const previousPage = () => {
    if (curentPage > 1) {
      setCurrentPage(curentPage - 1);
    }

  }




  //   main fuction
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //   filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering 
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType
        , postingDate }) => (

        jobLocation.toLowerCase() === selected.toLowerCase() || parseInt(maxPrice) <= parseInt(selected)
        || salaryType.toLowerCase() === selected.toLowerCase()
        || employmentType.toLowerCase() === selected.toLowerCase()


      ));
      console.log(filteredJobs);

    }

    /**slice the data based on current page */
    const { startIndex, endIndex } = calculatePagerange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)

  }
  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-Green">
      <Navbar />

      <div>
        <Banner query={query} handleInputChange={handleInputChange} />

        {/**main content data */}
        <div className="bg-lightgrey md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

          {/**left side */}
          <div className="bg-white p-4 rounded"> <SidesBar handleChange={handleChange} handleClick={handleClick} /> </div>

          {/**Job Cards */}
          <div className="col-span-2 bg-white p-4 rounded-sm">
            {
              isLoading ? (<p> Collecting Jobs...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
                <h3 className=" text lg font"> </h3>
                <p>No Jobs found.</p>
              </>

            }


            {/**pagination */}
            {
              result.length > 0 ? (
                <div className=" flex justify-center mt-4 space-x-8">
                  <button onClick={previousPage} disabled={curentPage === 1} className="hover:underline" > Previous </button>
                  <span className="mx-2"> Page {curentPage} of  {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                  <button onClick={nextPage} disabled={curentPage === Math.ceil(filteredItems.length /
                    itemsPerPage)} className="hover:underline">Next </button>

                </div>

              ) : ""
            }


          </div>

          {/**right side */}
          <div className="bg-white p-4 rounded"> right</div>

        </div>
      </div>
    </div>

  )
}

export default AnimalCaretaker