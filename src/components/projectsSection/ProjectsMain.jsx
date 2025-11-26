import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Earthquake Map Auto‑Updater",
    year: "June 2024",
    align: "right",
    image: "/images/earthquake_map.png",
    link: "https://earthquake-cluster-map.streamlit.app/",
    summary:
      "Real-time geospatial map that clusters earthquakes worldwide and supports CSV downloads for deeper analysis.",
    stack: ["Python", "Pandas", "Folium", "Streamlit"],
  },
  {
    name: "Pluto- Interactive Learning Platform",
    year: "April 2025",
    align: "left",
   image: "/images/Pluto_Project.png",
    link: "https://plutogenz.onrender.com/",
    summary:
      "Full-stack MERN application with authentication and interactive video learning features",
    stack: ["Javascript", "Oauth2 Authentication","Expressjs", "Mern-Stack", "Sendgrid-Integration", "Twillio-API"],
  },
];

const ProjectsMain = () => {
  return (
  <section id="projects" className="py-4 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 overflow-visible">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[1100px] mx-auto mt-12">
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
