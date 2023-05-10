import React from 'react'
import Portfolio from '../components/portfolio/portfolio';
import Layout from '../layouts/layout';
import { STRING } from '../string/string';
import { PORTFOLIO_DATA } from '../controller/data';

const Dashboard = () => {
    return (
        <Layout>
            <div className='py-8 px-6'>
                <div className='flex flex-col items-center sm:flex-col md:flex-row justify-between'>
                    <span className='md:text-2xl text-md w-full md:text-start text-center md:mb-0 mb-4 font-semibold'>{STRING.UTSAV_MODEL_PORTFOLIO}</span>
                    <div className='flex sm:flex-row md:flex-row flex-row md:justify-end justify-between w-full items-center gap-3'>
                        <button className='border flex items-center md:py-3 gap-2 py-2  px-2 rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.NEW_ALLOCATION}
                        </button>
                        <button className='border  flex items-center gap-2 md:py-3 py-2 px-2 rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.REBALANCING}
                        </button>
                    </div>

                </div>
                <div className='grid md:mt-12 mt-8 md:grid-cols-4 grid-cols-1 gap-4'>
                    {PORTFOLIO_DATA.map((item,index) => {
                        return (
                            <Portfolio key={index} data={item}/>
                        )
                    })}
                </div>

                <div className='mt-8 md:flex grid grid-cols-1 md:justify-end md:items-center gap-4 md:gap-5'>
                        <button className='border flex items-center py-3 px-3 gap-2 text-gray-400 text-sm rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.TIME_LINE}
                        </button>
                        <button className='border flex items-center py-3 px-3 gap-2 text-gray-400 text-sm rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.PERFORMANCE}
                        </button>
                        <button className='border flex items-center py-3 gap-2 px-3 text-gray-400 text-sm rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.MAP_YOUR_PORTFOLIO}
                        </button>
                        <button className='border flex items-center py-3 gap-2 px-3 text-gray-400 text-sm rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.VIEW_MODEL_PORTFOLIO}
                        </button>
                        <button className='border flex items-center py-3 gap-2 px-3  text-gray-400 text-sm rounded-2xl border-custom-gray'>
                            <img src={require("../assets/add.png")} />
                            {STRING.ANALYSIS_REPORTS}
                        </button>
                    </div>
            </div>
        </Layout>
    )
}

export default Dashboard
