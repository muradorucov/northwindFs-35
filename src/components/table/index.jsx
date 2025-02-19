import React, { useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteCompany } from "../../services/delete";
import { Link } from "react-router";
const Table = ({ companies }) => {


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">İstifadəçi Cədvəli</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-blue-600"
              >
                Company Name
              </th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-blue-600"
              >
                Contact Name
              </th>
              <th className="py-3 px-4 text-left">
                Contact Title
              </th>
              <th className="py-3 px-4 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-100 border-b transition duration-300"
              >
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.companyName}</td>
                <td className="py-2 px-4">{item.contactName}</td>
                <td className="py-2 px-4">{item.contactTitle}</td>
                <td className="py-2 px-4 flex gap-[4px]">
                  <Link to={`/detail/${item.id}`}>
                    <button>
                      <FaEye />
                    </button>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <button>
                      <FaEdit />
                    </button>
                  </Link>
                  <button className="cursor-pointer" onClick={() => {
                    deleteCompany(item.id)
                      .then(() => window.location.reload())
                  }}>
                    <FaDeleteLeft />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table
