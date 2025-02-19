import React, { useState } from 'react'

import { createCompany } from '../../services/create';
import { useNavigate } from 'react-router';
function Create() {

  const [isRequest, setIsRequest] = useState(false)

  const [company, setCompany] = useState({})
  const navigate = useNavigate()

  const createFormOnSubmit = (e) => {
    e.preventDefault();
    setIsRequest(true)
    createCompany(company)
      .then(() => navigate("/"))
      .catch(() => alert("company not create"))
      .finally(() => setIsRequest(false))
  }


  const inputHandler = (e) => {
    const { name, value } = e.target

    if (["contactTitle", "contactName", "companyName"].includes(name)) {
      setCompany({
        ...company,
        [name]: value
      })
    }
    else {
      setCompany({
        ...company,
        address: {
          ...company.address,
          [name]: value
        }
      })
    }
  }
  return (
    <div className="border-b border-gray-900/10 pb-12 max-w-[1140px] mx-[auto]">
      <h2 className="text-base/7 font-semibold text-gray-900">Company Information</h2>

      <form
        onSubmit={createFormOnSubmit}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="companyName" className="block text-sm/6 font-medium text-gray-900">
            Company name
          </label>
          <div className="mt-2">
            <input
              id="companyName"
              name="companyName"
              type="text" required
              value={company.companyName}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="contactName" className="block text-sm/6 font-medium text-gray-900">
            Contact Name
          </label>
          <div className="mt-2">
            <input
              id="contactName"
              name="contactName"
              type="text" required
              value={company.contactName}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="contactTitle" className="block text-sm/6 font-medium text-gray-900">
            Contact Title
          </label>
          <div className="mt-2">
            <input
              id="contactTitle"
              name="contactTitle"
              type="text" required
              value={company.contactTitle}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
            Country
          </label>
          <div className="mt-2">
            <input
              id="country"
              name="country"
              type="text" required
              value={company.address?.country}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
            Street
          </label>
          <div className="mt-2">
            <input
              id="street"
              name="street"
              type="text" required
              value={company.address?.street}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3 ">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text" required
              value={company.address?.city}
              onChange={inputHandler}
              autoComplete="address-level2"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="text" required
              value={company.address?.phone}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
            Region
          </label>
          <div className="mt-2">
            <input
              id="region"
              name="region"
              type="text" required
              value={company.address?.region}
              onChange={inputHandler}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              id="postal-code"
              name="postalCode"
              value={company.address?.postalCode}
              type="text" required
              onChange={inputHandler}
              autoComplete="postal-code"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <button className='border-[1px] border-[#000] py-[10px] px-[30px] disabled:bg-[#00000069]' disabled={isRequest}>Create</button>
      </ form>
    </div >
  )
}

export default Create