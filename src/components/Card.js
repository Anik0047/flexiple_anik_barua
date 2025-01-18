import React, { useState } from 'react';

const Card = ({ employee, position }) => {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);  // Toggle between showing all and 2 positions
    };

    return (
        <div className="border rounded-lg lg:w-[820px] lg:p-5 text-white">
            <h2 className="text-[40px] leading-[48px] font-medium">{employee.name}</h2>
            <div className='flex text-lg leading-[26px] font-medium lg:my-3'>
                <p><i className="fa-solid fa-briefcase"></i> Experience: {employee.experience} years</p>
                <p className='lg:mx-6'><i className="fa-regular fa-calendar"></i> Notice: {employee.noticePeriod}</p>
                <p><i className="fa-solid fa-money-bill"></i> Current CTC: {employee.currentCTC}</p>
            </div>
            <hr />
            <h3 className="lg:mt-4 text-lg leading-[26px] font-medium">Worked at:</h3>
            <div>
                <ul>
                    {position
                        .filter((pos) => pos.employeeId === employee.id)
                        .slice(0, showAll ? position.length : 2)  // Show either all or the first 2 based on `showAll`
                        .map((filteredPosition) => (
                            <li key={filteredPosition.id}>
                                <div className='flex gap-5 lg:mb-5 lg:mt-2'>
                                    <div className='text-3xl border rounded-lg px-6 py-3'>
                                        {filteredPosition.company.slice(0, 1)}
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <p className='text-2xl font-medium'>{filteredPosition.title}</p>
                                            <p className='text-lg font-medium'>{filteredPosition.company}</p>
                                        </div>
                                        <div className='text-right text-lg'>
                                            <p>{filteredPosition.startDate} {filteredPosition.endDate}</p>
                                            <p>{filteredPosition.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>

                {position.filter((pos) => pos.employeeId === employee.id).length > 2 && (
                    <p
                        className='text-center text-lg cursor-pointer text-white'
                        onClick={handleToggle}
                    >
                        {showAll ? 'Read Less' : 'Read More'}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap gap-2 lg:mt-4">
                {employee.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1.5 rounded-xl bg-black border border-gray-50">
                        {index === 0 && <i className="fa-solid fa-star-of-david"></i>} {skill}
                    </span>
                ))}
            </div>

            <button className='border w-full py-2.5 rounded-lg text-lg font-bold mt-5 bg-purple-600 hover:bg-purple-800'>
                Get a Quote <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
};

export default Card;
