import React from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';


const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const [tabName, setTabName] = useState(tabsName[0]);
    const [cousreName, setCourseName] = useState(HomePageExplore[0].courses);
    const [currentCourseHeading, setCurrentCourseHeading] = useState(HomePageExplore[0].courses[0].heading);

    const handleTabChange = (tabName) => {
        setTabName(tabName)
        const result = HomePageExplore.filter((cousre) => (cousre.tag === tabName))
        setCourseName(result[0].courses);
        setCurrentCourseHeading(result[0].courses[0].heading);
    }

    return (
        <div>

            <div className='text-4xl font-semibold text-center'>
                Unlock the
                <HighlightText text={"Power of Code"} />
            </div>

            <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>
                Learn to build anything you can imagine
            </p>

            <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100
      px-1 py-1'>
                {

                    tabsName.map((tab, index) => {
                        return (
                            <div onClick={() => handleTabChange(tab)}
                                className={`text-[16px] flex flex-row items-center gap-2 
                                ${tabName === tab
                                        ? "bg-richblack-900 text-richblack-5 font-medium"
                                        : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                            >
                                {tab}
                            </div>
                        )
                    })

                }

            </div>

            <div className='lg:h-[150px]'></div>

            {/* course card ka group */}

            <div className='absolute flex flex-row gap-10 justify-between w-full ml-[-300px] mt-[-150px]'>
                {
                    cousreName.map((element, index) => {
                        return (
                            <CourseCard
                                key={index}
                                cardData={element}
                                currentCard={currentCourseHeading}
                                setCurrentCard={setCurrentCourseHeading}
                            />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ExploreMore
