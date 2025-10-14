function InfoCard({title, tech = []}) {
  return (
    <>
      <div>
        <div className="card w-96 bg-base-200 card-md shadow-sm mt-20">
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
