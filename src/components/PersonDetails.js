"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

const PersonalDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/employee");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data = await res.json();
        setEmployees(data.employees);
        setPositions(data.positions);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black">
      <div className="lg:w-[1400px] mx-auto text-white">
        <div className="text-base lg:text-lg font-medium pt-10 px-5">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-chevron-right mx-5 lg:mx-10"></i>
          <span>Hire .NET Developers</span>
        </div>
        <div className="text-lg lg:flex items-center gap-10 mt-5 hidden lg:inline-block">
          <span>Filter by</span>
          <button className="border border-white flex justify-between items-center px-5 py-3 rounded-xl text-xl">
            Skills <i className="fa-solid fa-chevron-down ms-20"></i>
          </button>
          <button className="border border-white flex justify-between items-center px-5 py-3 rounded-xl text-xl">
            Notice period <i className="fa-solid fa-chevron-down ms-20"></i>
          </button>
        </div>
        <div className="block lg:hidden mt-10 px-5">
          <button className="border border-white flex justify-center items-center lg:px-5 py-3 rounded-xl w-full font-bold">
            <i className="fa-solid fa-wifi me-2"></i> Filter by
          </button>
        </div>
        <p className="lg:text-xl font-medium mt-10 px-5 lg:px-0">
          5,015 .NET engineers to hire...
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mx-5">
          <div>
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
            <div className="text-center mt-3">
              <span className="p-3 lg:p-4 bg-gray-600 rounded">1</span>
              <span className="p-3 lg:p-4 bg-gray-800 rounded">2</span>
              <span className="ms-4 p-3 bg-gray-800">
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </div>
          </div>
          <div className="pt-5 lg:pt-10 ">
            <div className="lg:sticky top-5 lg:w-[400px] lg:h-[426px] relative p-[2px] rounded-lg bg-border-gradient flex justify-center items-center">
              <div className="lg:w-[395px] lg:h-[420px] rounded-lg bg-black p-4 lg:p-8">
                <p className="text-2xl lg:text-3xl font-bold pe-5">
                  99% of Flexiple's clients hire talent after a risk-free trial.
                </p>
                <p className="text-sm lg:text-xl font-bold mt-5 lg:mt-10">
                  Flexiple's meticulous screening and matching process connects
                  you with exceptional developers perfectly aligned to your
                  specific needs.
                </p>
                <button className="w-full bg-white mt-5 lg:mt-10 text-black py-2 rounded-lg text-base font-bold">
                  Book a consultation call{" "}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
