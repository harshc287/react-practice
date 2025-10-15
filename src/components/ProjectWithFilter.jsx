import React, { useEffect, useState } from 'react'

const ProjectWithFilter = () => {

const[projects ,setProject] = useState([])
const [searchTerm , setSearchTerm] = useState('')
const [sortBy, setSortBy] = useState('')
const [filterDept, setFilterDept] = useState('')
const [loading , setLoading] = useState(true)
const [currentPage, setCurrentPage] = useState(1)
const itemsPerPage = 10


     function fetchData (){
      setLoading(true)
       fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
       .then(response => response.json())
       .then((data)=> {
        setProject(data)
        setLoading(false)
     })
       .catch((err) => {
        console.log(err)
        setLoading(false)
       })
    }
    
    useEffect(()=>{
        fetchData()
    },[])


    const departments = [...new Set(projects.map((p) => p.Department))]

     const filteredProjects = projects
     .filter(
    (p) =>
      p.ProjectName &&
      p.ProjectName.toLowerCase().includes(searchTerm.toLowerCase())&&
    (filterDept === "" || p.Department===filterDept)
    )

      .sort((a,b) =>{
        switch(sortBy){
          case 'priority':
            return a.priority.localeCompare(b.priority)
          case 'status':
            return a.status.localeCompare(b.status)
          case 'endDate':
            return new  Date(a.EndDate) -  new Date(b.EndDate)
          default:
            return 0
        }
      })

      const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
      const  startIndex = (currentPage - 1) * itemsPerPage
      const currentProjects = filteredProjects.slice(
        startIndex,
        startIndex + itemsPerPage
      )
    useEffect(()=>{
      setCurrentPage(1)
    },[searchTerm , filterDept, sortBy])
    
  return (
     <div className='container-fluid p-3 bg-info ' >
<h1>ProductsDetails 2</h1>

  <div className="container bg-dark p-4">
    <div className="row justify-content-center">
      <div className="col-md-8 d-flex">
          <input 
            className="form-control me-2" 
            type="text"
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)} 
            aria-label="Search"/>

          <select 
          className="form-select" 
          aria-label="Select category"
          onChange={(e) =>setFilterDept(e.target.value)}
          value={filterDept}>

            <option value="">All Depattment</option>
            {departments.map((dept , i)=>(
              
              <option key={i} value={dept}>{dept}</option>
            ))}

          </select>

           <select
          className="form-select w-auto ms-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
            <option value="">Sort By</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
            <option value="endDate">End Date</option>
        </select>

      </div>
    </div>
  </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (

<div className='container bg-dark' style={{ height: '500px', overflowY: 'scroll' }}>
<table className="table table-striped table-bordered" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project Name</th>
      <th scope="col">Details</th>
      <th scope="col">Department</th>
      <th scope="col">status</th>
      <th scope="col">priority</th>
      <th scope="col">startDate</th>
      <th scope="col">EndDate</th>
    </tr>
  </thead>
  <tbody>
 {currentProjects?.map((Project,i)=>(<>{Project ? 
     <tr key={i}>
      <th scope="row">{Project.id}</th>
      <td>{Project.ProjectName}</td>
      <td>{Project.Details}</td>
      <td>{Project.Department}</td>
      <td>{Project.status}</td>
      <td>{Project.priority}</td>
      <td>{Project.startDate}</td>
      <td>{Project.EndDate}</td>

    </tr>
    :<><div>Project Not found</div></>}</>))}
    </tbody>
</table>
</div>


      )}

      {filteredProjects.length > 10 &&(
        <nav className="d-flex justify-content-center mt-3">
          <ul className='pagination'>
          <li className={`page-item ${currentPage ===1 && 'disabled'}`}>
            <button
            className='page-link'
            onClick={()=> setCurrentPage(currentPage -1)}>
              Previous
            </button>
          </li>

          {Array.from({length: totalPages},(_, i)=>(
            <li
            key={i}
            className={`page-item ${
            currentPage === i + 1 ? 'active' : ''
          }`}>

            <button
          className="page-link"
          onClick={() => setCurrentPage(i + 1)}
         >
          {i + 1}
         </button>
            </li>
          ))}

         <li
                  className={`page-item ${
                    currentPage === totalPages && 'disabled'
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>

        </ul>
        </nav>
      )}


</div>
  )
}

export default ProjectWithFilter
