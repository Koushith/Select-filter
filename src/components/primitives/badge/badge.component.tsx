import React, { ReactNode, MouseEvent } from "react"

interface BadgeProps {
  text?: string
  textColor?: string
  iconColor?: string
  bgColor?: string
  onClickHandler?: (event: MouseEvent<HTMLDivElement>) => void
}

export const Badge: React.FC<BadgeProps> = ({
  text = "New York, NY",
  textColor = "text-blue-500",
  iconColor = "text-blue-500",
  bgColor = "bg-sky-100",
  onClickHandler,
}: BadgeProps) => {
  return (
    <div
      className={`h-6 mr-2 px-3 mt-1 py-0.5 rounded-md justify-start items-center gap-1 inline-flex ${bgColor}`}
    >
      <div
        className={`text-center ${textColor} text-sm font-medium font-['Inter'] leading-tight`}
      >
        {text}
      </div>
      <div
        onClick={onClickHandler}
        className={`w-2.5 ml-2 cursor-pointer justify-center items-center flex ${iconColor}`}
      >
        <i className='fa-solid fa-xmark'></i>
      </div>
    </div>
  )
}
