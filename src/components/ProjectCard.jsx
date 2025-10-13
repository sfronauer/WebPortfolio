function ProjectCard({ title, description, technologies = [], url }) {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="card card-side bg-base-300 shadow-sm w-full h-full">
        <figure className="w-1/2 h-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
           <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((t, index) => (
              <span
                key={index}
                className="badge badge-outline text-sm px-3 py-1"
              >
                {t}
              </span>
            ))}
           </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
