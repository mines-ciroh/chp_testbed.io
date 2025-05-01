import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import "@/app/globals.css";

export default function AboutPage() {
    return (    
        <Layout>
            <div className = "flex flex-col min-h-screen bg-gray-100 p-8 font-[Poppins]">
            <h1 className = "font-bold text-[30px] ">Get in touch</h1>
            <div className="flex flex-row justify-center w-full min-h-screen p-8 w-8 gap-8 rounded-lg shadow-md" 
            style={{
                background: "linear-gradient(to bottom, #75ACC4, #255F9C)",
            }}>
                <div className = "flex flex-row">
                <form className = "flex flex-col justify-center items-center text-center text-black"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                >
                    <input type="hidden" name="access_key" value="3352b449-b1d3-4292-9e38-a9fde375e687" />

                    <input type="text" name = "name" placeholder="Name" className="p-2 m-2 w-100 border rounded-md" required/>
                    <input type="email" name = "email" placeholder="Email" className="p-2 m-2 w-100 border rounded-md" required/>
                    <input type="text" name = "phone number" placeholder="Phone Number" className="p-2 m-2 w-100 border rounded-md" required/>

                    <textarea name = "message" placeholder="Message" className="p-2 m-2 w-100 h-75 border rounded-md" required></textarea>
                    <button type="submit" className="p-2 m-2 w-25 bg-[#75ACC4] text-black rounded-md">Send</button>
                </form>
                </div>
                <div className='w-100'></div>
                <div className = "flex flex-col justify-center items-center text-center text-black space-y-4">
                    <h1 className='font-bold'>Dr. Andy Wood</h1>
                    <div>
                        <h2 className='font-bold'>Email</h2>
                        <p>contact@example.com</p>
                    </div>

                    <div>
                        <h2 className='font-bold'>Phone</h2>
                        <p>+1 (123) 456-7890</p>
                    </div>
                    
                    <div>
                        <h2 className='font-bold'>Adress</h2>
                        <p>123 Main Street, Anytown, USA</p>
                    </div>
                    
                </div>                    
                
            </div>
            </div>
        </Layout>
       
    );
};
