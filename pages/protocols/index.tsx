'use client';
import React from 'react';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import "@/app/globals.css";
import Sidebar from '@/components/sideabar';
import CsvToTable from '@/components/csvtable';

type FileData = {
    fileName: string;
    [key: string]: any;
};

export default function Protocols() {
    const [data, setData] = useState<FileData[]>([]);
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [section, setSection] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<FileData | null >(null);

 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/files')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()

    const fileNames: string[] = result.files.map((file: { data: { title: string; }; }) => file.data.title)

      setData(result.files)
      setFileNames(fileNames)
    }
 
    fetchData().catch((e) => {
      // handle the error
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])

  function handleClick(fileName: string, section: string) {
    console.log(`File: ${fileName}, Section: ${section}`);
    setSelectedFile(fileName);
    setFileContent(data.find((file) => file.data.title === fileName)?.data || null);

    console.log(fileContent);
    setSection(section); // Reset section when a new file is selected
  }

    return (  
        <Layout>
           <div className="flex flex-row min-h-screen bg-gray-100 font-[Poppins]">
           <Sidebar>
                <ul>
                    {fileNames.map((step, index) => (
                        <div key={index} className='flex flex-col text-center p-4'>
                            <ul className='font-bold'>{step}
                            {["Elements", "Results", "Analyses"].map((item, index) => (
                                <li key={index} className='text-center'>
                                    <button className='text-center font-normal hover:text-gray-400' onClick={() => handleClick(step, item)}>
                                        {item}
                                    </button>
                                </li>
                            ))}
                            </ul>
                            
                        </div>
                    ))}
                </ul>
            </Sidebar>
                {(selectedFile && section === "Elements") ?(
                    
                    <div className='flex flex-col w-full'>    
                        <div className='flex flex-row text-left rounded-lg justify-between items-start space-x-4 w-full'>
                            <div className='flex flex-col text-left p-8 rounded-lg w-1/2'>
                                <h1 className="text-4xl font-bold mb-4">{selectedFile}</h1> 
                                <p className='font-bold'>Status: {fileContent?.status || "Unknown"}</p>
                                <p className="text-[20px]">{fileContent?.elements.synopsis || "Unknown"}</p>
                            </div>
                        
                            <div className='flex justify-center items-start w-1/2 p-6'>
                                <Image
                                    src={fileContent?.elements.pr_image}
                                    alt="Logo"
                                    quality={100}
                                    width={500} 
                                    height={300} 
                                    style={{ objectFit: 'contain' }} // Optional: Adjust object fit
                                /> 
                            </div> 
                        </div>

                        <div className='flex flex-col text-left p-8 rounded-lg'>
                            <h1 className="text-4xl font-bold mb-4">Table</h1> 
                            <CsvToTable
                                csvFilePath={fileContent?.elements.pr_specs_tbl || ""}
                            />
                        </div>

                    </div>

                ) : (selectedFile && section === "Results") ? (
                    <div className='flex flex-col text-left p-8 justify-between rounded-lg items-start space-y-4 w-full'>
                        <h1 className="text-4xl font-bold mb-4">{selectedFile} - Results</h1>
                        <p className='font-bold'>Status: {fileContent?.status || "Unknown"}</p> 
                    
                        <div className='flex flex-col text-left rounded-lg items-start space-y-4'>
                            <h2 className="text-3xl font-bold mb-4 justify-between">Tables</h2> 
                            {Object.values(fileContent?.results[0] || {})
                                .filter((result: any) => result.tbl_title)
                                .map((result: any, index) => (
                                <div key={index} className="flex flex-col justify-center items-start space-y-4">
                                    <h2 className="text-md font-bold">{result.tbl_title}</h2>
                                    <CsvToTable csvFilePath={result.rslt_table}/>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                ) : (selectedFile && section === "Analyses") ? (

                    <div className='flex flex-col text-left p-8 rounded-lg w-full'>
                        <h1 className="text-4xl font-bold mb-4">{selectedFile} - Analyses</h1> 
                        <p className="text-[20px]">{fileContent?.analyses[0].synopsis || "Unknown"}</p>
                        <div className="flex flex-col mt-8 space-x-7">
                            {Object.values(fileContent?.analyses[0] || {})
                                .filter((analysis: any) => analysis.graphic)
                                .map((analysis: any, index) => (
                                <div key={index} className="flex flex-col justify-center">
                                    <h2 className="text-sm font-bold p-4">{analysis.name}</h2>
                                    <p className="text-sm p-4">{analysis.caption}</p>

                                    <Image
                                        src={analysis.graphic}
                                        alt="Logo"
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            ))}
                        </div>     
                    </div>

                ) : (
                    <div className='flex flex-col items-center h-screen w-full'>
                        <div className="flex flex-col items-center text-center max-w-4xl p-8">
                            <h1 className="text-4xl font-bold mb-4">Protocols</h1> 
                            <div className='h-30'/>
                            <p className="text-[20px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus phasellus torquent libero quam varius morbi tempus. Diam quam ante varius; lectus consequat aliquam senectus lacus. Natoque ultricies metus; potenti et at adipiscing. Lacinia a fusce id elit mi condimentum porttitor. Nulla dui fermentum at mi consectetur fringilla venenatis gravida. Egestas adipiscing porta semper id vestibulum nibh dictum. Curae a nam in ex sed potenti pretium. Elementum magnis hendrerit himenaeos quam efficitur sollicitudin cubilia nascetur.</p>
                        </div>
                    </div>
                )}
             
           </div>
        
        </Layout>
       
    );
};