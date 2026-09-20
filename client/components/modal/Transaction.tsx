import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Plus, Minus } from 'lucide-react'

import { Transaction } from "@/types/transactions";

interface Props {
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const TransactionModal = ({setTransactions}: Props) => {
    const [active, setActive] = useState<'Income' | 'Expense'>('Income');
    const [alert, setAlert] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const now = new Date();

        const transaction: Transaction = {
            id: uuidv4(),
            type: active,
            amount: Number(formData.get('amount')),
            category: String(formData.get('category')),
            month: now.toLocaleString('default', { day: 'numeric', month: 'long', year: "numeric" }),
            date: now.toISOString().split('T')[0]
        }

        const amount = transaction.amount;
        const category = transaction.category;

        if(!amount || category === 'category'){
          setAlert('Please fill all the fields');

          setTimeout(() => {
            setAlert('');
          }, 3000);
          
          return;
        }

        setTransactions(prev => [...prev, transaction]);

        e.currentTarget.reset();
    }

    return(
        <div className='fixed border p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border-foreground rounded-lg shadow-lg'>
            <div className='flex flex-col gap-4'>
              <h1 className="font-bold font-mono text-xl"> Add Transaction </h1>

              <div className='flex gap-2 justify-between w-full'>
                <span onClick={() => setActive('Income')} className={`cursor-pointer w-1/2 flex items-center gap-1 border px-2 py-1 rounded-lg ${active === 'Income' ? 'border-income text-income bg-income/5' : ''}`}> <Plus size={12}/> Income </span>
                <span onClick={() => setActive('Expense')} className={`cursor-pointer w-1/2 flex items-center gap-1 border px-2 py-1 rounded-lg ${active === 'Expense' ? 'border-expense text-expense bg-expense/5': ''}`}> <Minus size={12}/> Expense </span>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input name="amount" type='number' placeholder="₹ Amount" className="border border-foreground/50 bg-background rounded-lg px-4 py-2 w-full"/>

                <select name="category" className="border border-foreground/50 bg-background rounded-lg px-4 py-2 w-full">
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

                {
                  alert && <p className="text-sm text-expense"> {alert} </p>
                }

                <button type="submit" className="cursor-pointer hover:bg-income/20 duration-200 bg-income/5 text-income border border-income px-4 py-2 rounded-lg w-full"> Save Transaction </button>
              </form>
            </div>
          </div>
    )
}

export default TransactionModal;