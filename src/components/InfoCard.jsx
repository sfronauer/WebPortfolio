function InfoCard({title, tech = []}) {
  return (
    <>
      <div className="">
        <div className="card w-96 bg-base-200/80 backdrop-blur-md shadow-lg shadow-primary/20
           rounded-2xl hover:scale-105 transition-transform duration-300 ease-out mt-15">
          <div className="card-body">
            <h2 className="card-title justify-center">{title}</h2>
           <ul className="list-disc ml-6">
            {tech.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
           </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
