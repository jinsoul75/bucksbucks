export interface Transaction {
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description?: string;
}

export interface DayData {
  date: Date;
  income: number;
  expense: number;
  transactions: Transaction[];
}
