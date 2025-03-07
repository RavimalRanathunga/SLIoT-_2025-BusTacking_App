// import dynamic from "next/dynamic";
import MapComponent from "../../components/MapComponent"

  

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    return( 
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 w-full z-10">
        <h1 className="text-2xl font-semibold text-green-600">{slug} Bus Location:</h1>
      </header>
        <div className="grid grid-row-2 gap-4 p-6 min-h-screen">
            <div className="bg-green-400 text-white p-6 rounded-md">
                <div className="grid grid-col-2 gap-4 h-[400px] bg-white">
                    <div className="p-6 h-full">
                       <h1 className="text-black text-xl">Bus ID: NB-2018</h1>
                       <h1 className="text-black text-xl mt-10">Day: Monday</h1>
                       <h1 className="text-black text-xl mt-10">From: Kandy</h1>
                       <h1 className="text-black text-xl mt-10">To: Colombo</h1>
                    </div>
                    <div className="p-6 h-full">

                    </div>
                </div>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-md">
            <MapComponent/>
            </div>
        </div>
    </div>);
  }