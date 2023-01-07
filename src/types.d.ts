export interface Transaction {
  date: string;
  category: string;
  amount: number;
}

export interface TransactionsList {
  [key: string]: Transaction
}

export interface ApiTransaction extends Transaction {
  id: string;
}

export interface Category {
  type: "income" | "expense";
  name: string;
}

export interface CategoriesList {
  [key: string]: Category
}
export interface ApiCategory extends Category {
  id: string;
}