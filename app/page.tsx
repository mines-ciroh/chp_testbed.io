import Image from "next/image";
import Layout from "@/components/Layout";


export default function Home() {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[Poppins] w-full">
      <div className="flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-8 items-center w-full w-screen h-[619]">
      <Image
        src="/cirohlogo.png"
        alt="Logo"
        width={300}
        height={300}
        className="rounded-full"
      />
      <div className="w-30"></div>
        <div className="flex flex-col items-center text-center box-border size-155 p-10">
          <h1 className="text-2xl font-bold p-4">
          Modeling - Forecasting - Collaboration Built by Hydrologists for Hydrologists
          </h1>
          <p className="text-lg text-gray-600">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus phasellus torquent libero quam varius morbi tempus. Diam quam ante varius; lectus consequat aliquam senectus lacus.
          Natoque ultricies metus; potenti et at adipiscing. Lacinia a fusce id elit mi condimentum porttitor. Nulla dui fermentum at mi consectetur fringilla venenatis gravida.
          Egestas adipiscing porta semper id vestibulum nibh dictum. Curae a nam in ex sed potenti pretium. Elementum magnis hendrerit himenaeos quam efficitur sollicitudin cubilia nascetur.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-8 items-center w-full w-screen h-[619] "
        style={{
          background: "linear-gradient(to bottom, #75ACC4, #255F9C)",
        }}
      >
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-2xl font-bold p-4">
        Designed for quick turnaround in a forecasting loop
          </h1>
        </div>
        <div className="w-80"></div>
        <Image
          src="/workflow-diagram.png"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>

      <div
        className="flex flex-col justify-center space-y-4 p-8 w-full w-screen h-[619]"
      >
        <h1 className="text-3xl font-bold p-4 text-center">
          Our Process
        </h1> 
        <div className="flex flex-row justify-center items-center text-center box-border space-x-4 p-10">

          {["Create", "Protocols", "Reporting", "Auditing", "Publish", "Collaborate"].map((step, index) => (
        <div
          key={index}
          className="flex flex-col justify-center w-65 h-75 bg-gray-200 rounded-lg shadow-md"
        >
          <h2 className="text-sm font-bold p-4">{step}</h2>
          <p className="text-sm text-gray-600 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula.
          </p>

        </div>
          ))}

        </div>
      </div>


    </div>
    


    </Layout>
  );
}
