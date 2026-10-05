'use client'

import { useState, useEffect } from "react";

import { Plus, Minus, Delete } from 'lucide-react'

import useLocalStorage from "@/hooks/useLocalStorage";
import { Transaction } from "@/types/transactions";
import Loading from "../loading";

const Transactions = () => {
    const [mounted, setMounted] = useState(false)
    const [transactions, setTransaction] = useLocalStorage<Transaction[]>('transactions', []);

    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState<'All' | 'Income' | 'Expense'>('All')
    const [categoryFilter, setCategoryFilter] = useState('category')

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return <Loading/>
    }
    
    const handleDelete = (id: string) => {
        setTransaction((prev) => 
            prev.filter((t) => t.id !== id)
        )
    }

    const filteredTransactions = transactions.filter((t) => {
        const matchesType = typeFilter === 'All' || t.type === typeFilter
        const matchesCategory = categoryFilter === 'category' || t.category === categoryFilter
        const matchesSearch = `${t.category} ${t.month} ${t.amount} ${t.date}`.toLowerCase().includes(search.toLowerCase())

        return(
            matchesType &&
            matchesSearch &&
            matchesCategory
        )
    })

    return(
        <main className='min-h-screen max-w-7xl mx-auto py-8 px-2'>
            <div className="py-8">
                <h1 className="text-4xl font-mono font-bold"> Transactions </h1>    
                <p className="text-foreground/50"> Manage and review all your financial records </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 items-center w-full justify-center gap-4">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="textbox" placeholder="Search transactions..." className="w-full border border-foreground/50 bg-background rounded-lg px-4 py-2"/>

                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as 'All' | 'Income' | 'Expense')} name="types" className="border border-foreground/50 bg-background rounded-lg px-4 py-2">
                    <option value='All'> All types </option>
                    <option value='Income'> Income </option>
                    <option value='Expense'> Expense </option>
                </select>

                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} name="category" className="col-span-2 sm:col-span-1 border border-foreground/50 bg-background rounded-lg px-4 py-2">
                  <option value="category">Select Category</option>
                  <option value="Food"> Food </option>
                  <option value="Transport"> Transport </option>
                  <option value="Entertainment"> Entertainment </option>
                  <option value="Salary"> Salary </option>
                  <option value="Investment"> Investment </option>
                  <option value="Gaming"> Gaming </option>
                  <option value="Clothing"> Clothing </option>
                  <option value="Gadgets"> Gadgets </option>
                  <option value="Gurudwara"> Gurudwara </option>
                  <option value="Miscellaneous"> Miscellaneous </option>
                </select>
            </div>

            <div className="w-full overflow-x-auto py-8">
                {
                    filteredTransactions.length > 0 ? (
                        <table className="min-w-full border">
                            <thead className="border">
                                <tr>
                                    {/* <th className="text-left px-4 py-2 w-2"> TYPE </th> */}
                                    <th className="text-left px-4 py-2 text-xs"> AMOUNT </th>
                                    <th className="text-left px-4 py-2 text-xs"> CATEGORY </th>
                                    <th className="text-left px-4 py-2 text-xs"> MONTH </th>
                                    <th className="text-left px-4 py-2 text-xs"> ACTIONS </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredTransactions.reverse().map((t) => (
                                        <tr key={t.id} className="border-t">
                                            {/* <td className={`px-4 py-2 ${t.type === 'Income' ? 'text-income bg-income/10' : 'text-expense bg-expense/10'}`}> {t.type} </td> */}
                                            <td className={`px-4 py-2 flex items-center text-xs ${t.type === 'Income' ? 'text-income' : 'text-expense'}`}> 
                                                {t.type === 'Income' ? <Plus size={12}/> : <Minus size={12}/>}₹{t.amount} 
                                            </td>
                                            <td className="px-4 py-2 text-xs"> {t.category} </td>
                                            <td className="px-4 py-2 text-xs"> {t.date} {t.month} </td>
                                            <td className="px-4 py-2 flex text-expense text-xs"> <span onClick={() => handleDelete(t.id)} className="border p-1 rounded-lg flex items-center gap-1 bg-expense/10 cursor-pointer"> <Delete size={16}/> Delete </span> </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <span className="text-center"> No transactions found! </span>
                    )
                }
            </div>
        </main>
    )
}

export default Transactions;