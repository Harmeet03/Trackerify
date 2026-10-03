import { Transaction } from "@/types/transactions";

export const getTotalIncome = (transactions: Transaction[], month: string): number => {
    return transactions
        .filter((t) => t.type === 'Income' && t.month === month)
        .reduce((sum, t) => sum + t.amount, 0)
}

export const getTotalExpense = (transactions: Transaction[], month: string): number => {
    return transactions
        .filter((t) => t.type === 'Expense' && t.month === month)
        .reduce((sum, t) => sum + t.amount, 0)
}

export const getTotalSavings = (transactions: Transaction[], month: string): number => {
    return getTotalIncome(transactions, month) - getTotalExpense(transactions, month);
}

export const getSavingsRate = (transactions: Transaction[], month: string): number => {
    const income = getTotalIncome(transactions, month);

    if (income === 0) return 0;

    return Number(
        ((getTotalSavings(transactions, month) / income) * 100).toFixed(2)
    )
}

// CREATING SAVING % CHANGE FOR CURRENT MONTH BASED ON PREVIOUS MONTH
export const getCurrentMonth = () => {
    const now = new Date()

    const month = now.toLocaleString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return month
}

export const getPreviousMonth = () => {
    const previousDate = new Date()

    previousDate.setMonth(previousDate.getMonth() - 1)

    const month = previousDate.toLocaleString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return month
}

export const getMonthlyTotal = (transactions: Transaction[], month: string, type: 'Income' | 'Expense') => {
    return transactions
        .filter(
            (t) => 
                t.type === type &&
                t.month === month
        )
        .reduce((sum, t) => sum + t.amount, 0)
}

export const getPercentageChange = (current: number, previous: number) => {
    if(previous === 0) return 0;
    
    return Number(
        (((current - previous) / previous) * 100).toFixed(2)
    )
}

    // PIE CHART DATA OF EXPENSES DISTRIBUTION
    export const getExpenseDistribution = (transactions: Transaction[], month: string) => {
        const expenses = transactions.filter(
            (t) => (
                t.type === 'Expense' &&
                t.month === month
            )
        )

        const expenseData = expenses.reduce<{name: string, value: number}[]>(
            (acc, transaction) => {
                const existing = acc.find(
                    item => item.name === transaction.category
                )

                if(existing){
                    existing.value += transaction.amount
                }
                else{
                    acc.push({
                        name: transaction.category,
                        value: transaction.amount
                    })
                }

                return acc
            }, []
        )

        return expenseData
    }