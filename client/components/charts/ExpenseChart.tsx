import { getExpenseDistribution } from '@/lib/calculations'
import { Transaction } from '@/types/transactions'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Data {
    transactions: Transaction[],
    month: string
}

const COLORS = [
  "#fc0202",
  "#f97316",
  "#eab308",
  "#07ef1e",
  "#0b60e9",
  "#dd12f4",
  "#6b6a6b",
  "#06b6d4",
];

const ExpenseChart = ({transactions, month}: Data) => {
    const data = getExpenseDistribution(transactions, month)

    const totalExpense = data.reduce(
        (sum, item) => sum + item.value, 0
    );

    console.log(data)
    
    return(
        <div className="border rounded-2xl border-expense py-4 my-8 px-2 hover:bg-expense/20 duration-300 cursor-default">
            <div className="flex justify-between border-b border-expense pb-2">
                <h2 className="font-mono text-xl font-bold"> Expense Distribution </h2>
                <span className="text-foreground/20"> {month} </span>
            </div>

            {
                data.length > 0 ? (
                    <ResponsiveContainer width='100%' height={500}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey='value'
                                nameKey='name'
                                outerRadius={120}
                                label={({value}) => `₹${value}`}
                            >
                                {
                                    data.map((entry, i) => (
                                        <Cell
                                            key={entry.name}
                                            fill={COLORS[i % COLORS.length]}
                                        />
                                    ))
                                }
                            </Pie>

                            <Tooltip/>

                            <Legend 
                                wrapperStyle={{
                                    paddingTop: "15px",
                                }}
                                layout='vertical'
                                align='center'
                                verticalAlign='bottom'
                                formatter={(value) => {
                                    const item = data.find(d => d.name === value)

                                    if(!item) return value

                                    const percentage = (
                                        (item.value / totalExpense) * 100
                                    ).toFixed(2)

                                    return `${value} • ${percentage}%`
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <span className='justify-center flex py-8'> No expenses to evaluate! </span>
                )
            }

            
        </div>
    )
}   

export default ExpenseChart