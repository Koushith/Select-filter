import React from "react"
import { DocumentSelect } from "../../components"

export const OnboradingScreen = ()=>{
    return (
      <div className=' bg-gray-50 flex flex-col mx-auto my-0  item-center justify-center'>
        <div className='p-6 '>
          <div className=' h-28 p-6 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-4 inline-flex'>
            <div className="self-stretch text-gray-900 text-lg font-semibold font-['Inter'] leading-relaxed">
              Which agreements, forms and notices should be sent to Jason Smith?
            </div>
            <div className="self-stretch text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
              Employees assigned to this job type will be required to review,
              where relevant fill-in, and sign the following agreements and
              notices:
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
            Select the agreements, notices and documents you want Jason Smith to
            sign
          </div>
          {/* document selector */}
          <DocumentSelect/>
        </div>
      </div>
    )
}