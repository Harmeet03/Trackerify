export interface Transaction {
    id: string;
    type: 'Income' | 'Expense';
    amount: number;
    category: string;
    month: string;
    date: string;
}