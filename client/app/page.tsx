'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

import { Plus, Minus } from 'lucide-react'

import TransactionModal from "@/components/modal/Transaction";
import Earning from "@/components/cards/Earning";
import Expenses from "@/components/cards/Expenses";
import Saving from "@/components/cards/Saving";
import SavingRate from "@/components/cards/SavingRate";
import ExpenseChart from "@/components/charts/ExpenseChart";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Transaction } from "@/types/transactions";
import { getTotalIncome, getTotalExpense, getTotalSavings, getSavingsRate, getCurrentMonth, getPreviousMonth, getMonthlyTotal, getPercentageChange } from '@/lib/calculations'
import Loading from "./loading";

export default function Home() {

  const [openModal, setOpenModal] = useState(false);
  const [mounted, setMounted] = useState(false)

  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('transactions', [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.document.body.style.overflow = openModal ? 'hidden' : 'auto';
  }, [openModal])

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }


  if(!mounted){
    return <Loading/>
  }
  
  let currentMonth = getCurrentMonth();
  let previousMonth = getPreviousMonth();
  
  let totalIncome = getTotalIncome(transactions, currentMonth)
  let totalExpense = getTotalExpense(transactions, currentMonth)
  let totalSavings = getTotalSavings(transactions, currentMonth)
  let totalSavingsRate = getSavingsRate(transactions, currentMonth)
  

  let currentIncome = getMonthlyTotal(transactions, currentMonth, 'Income')
  let previousIncome = getMonthlyTotal(transactions, previousMonth, 'Income')
  let incomeChange = getPercentageChange(currentIncome, previousIncome)
  
  let currentExpense = getMonthlyTotal(transactions, currentMonth, 'Expense')
  let previousExpense = getMonthlyTotal(transactions, previousMonth, 'Expense')
  let expenseChange = getPercentageChange(currentExpense, previousExpense)

  let currentSavings = currentIncome - currentExpense
  let previousSavings = previousIncome -previousExpense
  let savingsChange = getPercentageChange(currentSavings, previousSavings)

  let currentSavingsRate = currentIncome === 0 ? 0 : (currentSavings / currentIncome) * 100
  let previousSavingsRate = previousIncome === 0 ? 0 : (previousSavings / previousIncome) * 100
  let savingsRateChange = getPercentageChange(currentSavingsRate, previousSavingsRate)

  return (
    <main className='min-h-screen max-w-7xl mx-auto py-8 px-2'> 
      <div className="py-8">
        <h1 className="text-4xl font-mono font-bold"> Dashboard </h1>    
        <p className="text-foreground/50"> Here's a snapshot of your finances — {currentMonth} </p>
      </div>

      <div className="max-w-4xl gap-4 mx-auto grid grid-cols-2">
        <Earning amount={totalIncome} change={incomeChange}/>
        <Expenses amount={totalExpense} change={expenseChange}/>
        <Saving amount={totalSavings} change={savingsChange}/>
        <SavingRate amount={totalSavingsRate} change={savingsRateChange}/>
      </div>

      <ExpenseChart transactions={transactions} month={currentMonth}/>

      <div onClick={() => handleOpenModal()} className='z-40 cursor-pointer fixed border py-2 px-1 rounded-lg border-foreground text-foreground bg-background bottom-16 right-4'>
        {
          openModal ? (
            <span className="text-xs flex items-center gap-1"> <Minus size={12}/> Close </span>
          ) : (
            <span className="text-xs flex items-center gap-1"> <Plus size={12}/> Add Transaction </span>
          )
        }
      </div>

      {
        openModal && (
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-10'>
            <TransactionModal setTransactions={setTransactions}/>
          </div>
        )
      }
    </main>
  );
}
