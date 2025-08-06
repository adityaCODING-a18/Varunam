import React from 'react'

const GreetHello = (props) => {
  return (
    <div className="flex flex-col mt-10">
          <h1 className="text-4xl font-bold text-center text-[#09817F] font-[poppins]">
            {props.isTeamMember ? 'Team Member' : 'Student'} Dashboard
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            {props.isTeamMember ? 'Welcome to your Varunam team member dashboard.' : 'Welcome to your student dashboard.'}
          </p>
    </div>
  )
}

export default GreetHello
