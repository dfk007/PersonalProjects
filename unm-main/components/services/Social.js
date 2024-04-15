import React from 'react'
import Image from 'next/image'
import icon1 from "../../assets/services/5.png";
import icon2 from "../../assets/services/6.png";

const Social = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2">
    <div className="relative md:hidden lg:flex">
      <div className="absolute top-44 left-32 md:top-56 md:left-44 z-0">
        <Image src={icon2} width={200} height={200} alt="icon" />
      </div>
      <div className="z-10">
        <Image src={icon1} width={500} height={500} alt="icon" />
      </div>
    </div>
    <div className="pb-20 md:py-40 md:pr-40 container">
      <h2 className="h2 md:text-right">Cover Letter & LinkedIn Uniqueness</h2>
      <div className="text-sm space-y-5 md:text-right">
        <p>
          It’s more than just your introduction. TBH it’s a brief history of
          your credentials, accomplishments, skills, and interests. Hiring
          managers are urged to unlock your hidden talent once they’ve had a
          glimpse of what to expect from an Unmatche’dd’ Resume.
        </p>
        <p>
          Nowadays, professionals have turned to LinkedIn as a means of
          networking with potential employers and gaining benefits through
          social media. Our LinkedIn Profile optimization is second to none
          when it comes to making your presence felt!
        </p>
      </div>
    </div>
  </div>
  )
}

export default Social