import { Card } from "../ui/dashboard/cards";

export default function Page()
{
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 w-full z-10">
        <h1 className="text-2xl font-semibold text-green-600">Dashboard</h1>
      </header>
        <div className="flex justify-around grow gap-10 flex-wrap m-20">
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
            <Card id="NB-2018" date="Monday" from="Kandy" to="Colombo" time="7.30 A.M."/>
        </div>
        </div>
    );
}