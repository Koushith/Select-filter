import React from "react"
import { DocumentSelect } from "../../components"

export const OnboradingScreen = () => {
  return (
    <div className='bg-gray-50  h-[100vh]'>
      <div className='pt-20'>
        <div className='w-[1024px] mx-auto '>
          {/* <div
            className=' w-[1024px] h-28 p-6 bg-white rounded-lg border border-gray-200  '
            style={{ width: "1025px" }}
          >
            <h2 className='self-stretch text-gray-900 text-lg font-semibold   leading-relaxed'>
              Which agreements, forms and notices should be sent to Jason Smith?
            </h2>
            <p className='self-stretch mt-4 text-gray-900 text-sm font-medium  leading-tight'>
              Employees assigned to this job type will be required to review,
              where relevant fill-in, and sign the following agreements and
              notices:
            </p>
          </div> */}

          <p className="text-gray-900 text-sm font-medium font-['Inter'] mt-6 leading-tight">
            Select the agreements, notices and documents you want Jason Smith to
            sign
          </p>

          <div className='mt-2'>
            <DocumentSelect />
          </div>
        </div>
      </div>
    </div>
  )
}
