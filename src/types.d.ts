export interface Transaction {
  type: 'income' | 'expense';
  category: string;
  amount: number;
}