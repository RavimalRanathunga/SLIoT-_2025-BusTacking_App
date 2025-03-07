import Link from "next/link";
import { lusitana } from "../fonts";

export function Card({
    id,
    date,
    from,
    to,
    time,
    // type,
  }: {
    id: string;
    date: number | string;
    from:string;
    to:string;
    time:string;
    // type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
    // const Icon = iconMap[type];
  
    return (
      
      <div className="rounded-xl bg-green-500 p-2 shadow-sm md:h-[300px]">
        <Link href={`dashboard/${id}`}>
        <div className="flex p-4">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          <h3 className="ml-2 text-sm font-medium">{id}</h3>
        </div>
        <div className="bg-white rounded-xl p-4">
        <p
          className={`${lusitana.className}
            truncate rounded-xl text-2xl`}
        >
          Day: {date}
        </p>
        <p
          className={`${lusitana.className}
            truncate rounded-xl text-2xl`}
        >
          From: {from}
        </p>
        <p
          className={`${lusitana.className}
            truncate rounded-xl text-2xl`}
        >
          To: {to}
        </p>
        <p
          className={`${lusitana.className}
            truncate rounded-xl text-2xl`}
        >
          Time: {time}
        </p>
        </div>
     
        </Link>
      </div>
    );
  }
  