"use client"

import React, { useEffect, useState } from 'react';
import Card from './Card';

const PersonalDetails = () => {

    const [employees, setEmployees] = useState([]);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/employee');
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status}`);
                }
                const data = await res.json();
                setEmployees(data.employees);
                setPositions(data.positions);
            } catch (error) {
                console.error('Failed to fetch employees:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className='bg-black'>
            <div className='lg:w-[1400px] mx-auto text-white'>
                <div className='text-lg font-medium'>
                    <i className="fa-solid fa-house"></i>
                    <i className="fa-solid fa-chevron-right lg:mx-10"></i>
                    <span>Hire .NET Developers</span>
                </div>
                <div className='text-lg flex items-center gap-10 mt-5'>
                    <span>Filter by</span>
                    <button className='border border-white flex justify-between items-center px-5 py-3 rounded-xl text-xl'>Skills <i className="fa-solid fa-chevron-down ms-20"></i></button>
                    <button className='border border-white flex justify-between items-center px-5 py-3 rounded-xl text-xl'>Notice period <i className="fa-solid fa-chevron-down ms-20"></i></button>
                </div>
                <p className='text-xl font-medium mt-5'>5,015 .NET engineers to hire...</p>
                <div className="py-10 flex flex-col gap-10">
                    {employees?.map((employee) => (
                        <Card
                            key={employee.id}
                            employeeId={employee.id}
                            employee={employee}
                            position={positions}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;