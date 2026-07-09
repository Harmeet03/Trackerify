import { ChartLine, ArrowUp, ArrowDown } from 'lucide-react'

interface Data {
  amount: number,
  change: number
}

const SavingRate = ({amount, change}: Data) => {
  return(
    <div className="p-4 rounded-2xl bg-background border border-yellow-400 hover:bg-yellow-400/10 duration-300 cursor-default">
      <div className="flex items-center justify-between py-4">
        <span className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400">
          <ChartLine size={32}/>
        </span>
        {
          change > -1 ? (
          <span className="flex items-center text-sm px-1 rounded-full bg-yellow-400/20 text-yellow-400">
            <ArrowUp size={16}/> {change}%
          </span>
          ) : (
            <span className="flex items-center text-sm px-1 rounded-full bg-yellow-400/20 text-yellow-400">
              <ArrowDown size={16}/> {change}%
            </span>
          )
        }
      </div>

      <div className="flex flex-col">
        <span className="text-3xl font-bold"> {amount}% </span>
        <span className="text-sm text-foreground/20"> Savings Rate </span>
      </div>
    </div>
  )
}

export default SavingRate