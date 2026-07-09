import { ShoppingBag, ArrowUp, ArrowDown } from 'lucide-react'

interface Data {
  amount: number,
  change: number
}

const Expenses = ({amount, change}: Data) => {
  return(
    <div className="p-4 rounded-2xl bg-background border border-expense hover:bg-expense/10 duration-300 cursor-default">
      <div className="flex items-center justify-between py-4">
        <span className="p-2 rounded-lg bg-expense/20 text-expense">
          <ShoppingBag size={32}/>
        </span>
        {
          change > -1 ? (
          <span className="flex items-center text-sm px-1 rounded-full bg-expense/20 text-expense">
            <ArrowUp size={16}/> {change}%
          </span>
          ) : (
            <span className="flex items-center text-sm px-1 rounded-full bg-expense/20 text-expense">
              <ArrowDown size={16}/> {change}%
            </span>
          )
        }
      </div>

      <div className="flex flex-col">
        <span className="text-3xl font-bold"> ₹{amount} </span>
        <span className="text-sm text-foreground/20"> Total Expense </span>
      </div>
    </div>
  )
}

export default Expenses