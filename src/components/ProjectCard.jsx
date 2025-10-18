function ProjectCard({ title, description, technologies = [], url, picture }) {
  return (
 <div className="w-full flex justify-center">
      <div className="card flex flex-col md:flex-row bg-base-200 shadow-sm w-full max-w-4xl rounded-xl  overflow-hidden">
        
        <figure className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}${picture}`}
            alt={title}
            className="w-full h-full object-cover"
            style={{ minHeight: '24rem' }}
          />
        </figure>

        <div className="card-body w-full md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-xl md:text-2xl">{title}</h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg">{description}</p>
            <p className="flex flex-wrap gap-2 mt-2 pb-2">
              {technologies.map((t, index) => (
                <span
                  key={index}
                  className="badge badge-outline text-xs md:text-sm px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </p>
          </div>
          {url && (
            <a
              href={url}
              target="_blank"
              className="text-white text-sm md:text-lg underline mt-2 mb-4 inline-block"
            >
              View project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
