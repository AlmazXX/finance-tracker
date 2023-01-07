export interface Transaction {
  type: string;
  category: string;
  amount: number;
}

export interface Category {
  type: 'income' | 'expense',
  name: string
}