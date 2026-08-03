import React from 'react';
// Note: If you don't have lucide-react installed, you can replace these with plain text
import { Pencil, Trash2 } from 'lucide-react';
import {Link} from "react-router"

export function Card({data,deleteemp}) {
  
   

  return (
    <div className="max-w-xs overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
                        
        <Link to={`/detail/${data.id}`}> <img
          className="h-24 w-24 rounded-full object-cover ring-4 ring-slate-50"
          src={`https://api.dicebear.com/10.x/initials/svg?seed=${data.Name}`}
          alt={`${data.Name}'s profile`}
        />
        </Link>
        <h3 className="mt-4 text-lg font-semibold text-slate-800">
          {data.Name}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-500">
          {data.designation}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <Link to={`/editemployeedata/${data.id}`}>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors duration-200 hover:bg-indigo-100"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        </Link>
        
        <button
          type="button"
          onClick={()=>deleteemp(data.id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition-colors duration-200 hover:bg-rose-100"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>

    </div>
  );
}
