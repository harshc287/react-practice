import React, { useEffect, useState } from 'react'

const ProjectFetchApi = () => {

    const [projects, setProject] = useState()
    const [search, setSearch] = useState("")
    const [filtered, setFiltered ] = useState([])

    function fetchData (){
        fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
        .then(response => response.json())
        .then(data => { const activeProjects = data.filter(projects => projects.status === 'active')  
                console.log('Active Projects:', activeProjects);

            setProject(data)})
        .catch(err => console.log(err))

    }

useEffect(()=>{
    fetchData()
})


  return (
    <div className='container bg-info p-4'>

<h1>ProductsDetails</h1>
<table className="table">
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
 {projects?.map((Project,i)=>(<>{Project ? 
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
  )
}

export default ProjectFetchApi
