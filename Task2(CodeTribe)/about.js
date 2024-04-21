let projects = [
    {
      title: "Temporal Residence Room Booking App",
      description: "This is a temporal residence booking app I developed for DUT students aimed to provide shelter for students as they wait for the housing department to allocate them.",
      image: "./pic/v2.jpg" 
    },
    {
      title: "Agri Link AI",
      description: "This is a prototype developed during Ai Mashup Hackathon last year. Won 2nd position in KZN along with my group Tech Titans and I was part of the development team.",
      image: "./pic/homep.jpg" 
    }
  ];
  
  let projectsContainer = document.querySelector(".my-projects");
  
  projects.forEach(project => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
  
    let image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;
  
    let title = document.createElement("h2");
    title.textContent = project.title;
  
    let description = document.createElement("p");
    description.textContent = project.description;
  
    projectDiv.appendChild(image);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
  
    projectsContainer.appendChild(projectDiv);
  });
  