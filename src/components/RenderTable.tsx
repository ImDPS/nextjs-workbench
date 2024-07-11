"use client"

import React from 'react'
import { DataTable } from './data-table'
import { useDataTable } from '@/hooks/use-data-table'
import { Table } from '@tanstack/react-table'

export const RenderTable = () => {

  const table = useDataTable({
    data: [
        { id: 1, name: "John Doe", age: 32 },
        { id: 2, name: "Jane Doe", age: 31 },
    ],
    columns: [
        { header: "ID", accessorKey: "id" },
        { header: "Name", accessorKey: "name" },
        { header: "Age", accessorKey: "age" },
    ],
    pageCount: 1,
    defaultPerPage: 10,
    // defaultSort: undefined,
  })
  
  return (
    <div>
        <DataTable 
            table={table as unknown as Table<unknown>} 
            floatingBar={null} 
            className="w-full space-y-2.5 overflow-auto"
        />
    </div>
  )
}
