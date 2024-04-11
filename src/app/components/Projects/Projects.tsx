import React from 'react'

function Projects() {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 " style={{ opacity: 1 }}>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-[#a2f678]/10 scrollbar-thumb-[#00a359]/80 scrollbar">
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" style={{ opacity: 1, transform: 'none' }} />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#a2f678]/50">Case Study 1 of 3:</span> Netflix Clone
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
                        </div>
                        <p className="text-lg text-center md:text-left">
                            Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" style={{ opacity: 1, transform: 'none' }} />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#a2f678]/50">Case Study 1 of 3:</span> Netflix Clone
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
                        </div>
                        <p className="text-lg text-center md:text-left">
                            Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" style={{ opacity: 1, transform: 'none' }} />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#a2f678]/50">Case Study 1 of 3:</span> Netflix Clone
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png" alt="" />
                            <img className="h-10 w-10" src="https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png" alt="" />
                        </div>
                        <p className="text-lg text-center md:text-left">
                            Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!
                        </p>
                    </div>
                </div>
                {/* Repeat similar structure for other case studies */}
            </div>
            <div className="w-full absolute top-[30%] bg-[#b9f1d6]/10 left-0 h-[500px] -skew-y-12"></div>
        </div>
    )
}

export default Projects