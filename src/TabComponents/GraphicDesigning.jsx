/* eslint-disable react/prop-types */


const GraphicDesigning = ({grdisJobs}) => {
    const {jobTitle, deadline, price, description} = grdisJobs || {}
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>{deadline}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary ">Bid Now</button>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigning;