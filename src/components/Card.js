import React, { useState } from "react";

const Card = ({ employee, position }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle between showing all and 2 positions
  };

  return (
    <div className="border rounded-lg lg:w-[820px] p-5 text-white">
      <h2 className="text-3xl lg:text-[40px] leading-[48px] font-bold">
        {employee.name}
      </h2>
      <div className="flex flex-col lg:flex-row text-sm lg:text-lg leading-[26px] font-medium my-3">
        <p>
          <i className="fa-solid fa-briefcase"></i> Experience:{" "}
          {employee.experience} years
        </p>
        <p className="lg:mx-6 my-2">
          <i className="fa-regular fa-calendar"></i> Notice:{" "}
          {employee.noticePeriod}
        </p>
        <p>
          <i className="fa-solid fa-money-bill"></i> Current CTC:{" "}
          {employee.currentCTC}
        </p>
      </div>
      <hr />
      <h3 className="my-4 lg:text-lg leading-[26px] font-medium">Worked at:</h3>
      <div>
        <ul>
          {position
            .filter((pos) => pos.employeeId === employee.id)
            .slice(0, showAll ? position.length : 2) // Show either all or the first 2 based on `showAll`
            .map((filteredPosition) => (
              <li key={filteredPosition.id}>
                <div className="flex items-center gap-5 mb-5 lg:mt-2 ">
                  <div className=" lg:text-3xl border rounded-lg px-3 lg:px-6 py-1 lg:py-3 w-[60px] lg:w-[100px] h-[50px] lg:h-[70px] flex justify-center items-center">
                    {filteredPosition.company.slice(0, 1)}
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                    <div>
                      <p className="lg:text-2xl font-medium">
                        {filteredPosition.title}
                      </p>
                      <p className="lg:text-lg font-medium">
                        {filteredPosition.company}
                      </p>
                    </div>
                    <div className="lg:text-right lg:text-lg">
                      <p>
                        {filteredPosition.startDate} {filteredPosition.endDate}
                      </p>
                      <p>{filteredPosition.duration}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        {position.filter((pos) => pos.employeeId === employee.id).length >
          2 && (
          <p
            className="text-center text-lg cursor-pointer text-white mb-5"
            onClick={handleToggle}>
            {showAll ? "Read Less" : "Read More"}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 lg:mt-4">
        {employee.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 lg:py-1.5 rounded-xl bg-black border border-gray-50 text-sm">
            {index === 0 && <i className="fa-solid fa-star-of-david"></i>}{" "}
            {skill}
          </span>
        ))}
      </div>

      <button className="border-0 w-full py-2.5 rounded-lg text-sm lg:text-lg font-bold mt-5 bg-purple-600 hover:bg-purple-800">
        Get a Quote <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Card;
