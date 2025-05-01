import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import "@/app/globals.css";

export default function AboutPage() {
    return (    
        <Layout>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8 font-[Poppins]">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-center max-w-2xl mb-4 p-8">
                    The CIROH Hydrologic Prediction Testbed is a collaborative initiative designed to enhance hydrologic prediction capabilities through advanced modeling, data assimilation, and machine learning techniques. Our mission is to provide a platform for researchers and practitioners to develop, test, and validate innovative hydrologic models and tools.
                </p>

                <div className='w-7/8 border-1'></div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                    <h1 className="text-3xl font-bold p-4 text-center">People</h1>
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="flex flex-col justify-center w-65 h-75 bg-gray-200 rounded-lg shadow-md">
                            <Image
                                src="/cirohlogo.png"
                                alt="Logo"
                                width={300}
                                height={300}
                                className="rounded-full mb-2" />
                            <h2 className="text-sm font-bold p-4">Dr. Wood</h2>
                        </div>
                        <div className="h-15"></div>
                        <div className="flex flex-row mt-8 space-x-7">
                            {["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"].map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center w-65 h-75 bg-gray-200 rounded-lg shadow-md"
                                >
                                    <Image
                                        src="/cirohlogo.png"
                                        alt="Logo"
                                        width={250}
                                        height={250}
                                        className="rounded-full mb-2" />
                                    <h2 className="text-sm font-bold p-4">{step}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                        
                <div className='h-12'></div>
                <div className='w-7/8 border-1'></div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                    <h1 className="text-3xl font-bold p-4 text-center">Collaborators</h1>
                    <div className="flex flex-col items-center text-center p-4">
                   
                        <div className="flex flex-row mt-8 space-x-7">
                            {["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"].map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center w-65 h-75 bg-gray-200 rounded-lg shadow-md"
                                >
                                    <Image
                                        src="/cirohlogo.png"
                                        alt="Logo"
                                        width={250}
                                        height={250}
                                        className="rounded-full mb-2" />
                                    <h2 className="text-sm font-bold p-4">{step}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
       
    );
};
