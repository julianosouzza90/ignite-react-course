import {  createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number
  description: String
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

export const TransactionContext = createContext({} as TransactionContextType)
interface TransactionsProviderProps {
  children: ReactNode
}
export const TransactionProvider = function ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    (async() => {
      const response = await fetch(' http://localhost:3000/transactions')
      const data = await response.json()
      setTransactions(data)
    })()
  },[])

  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}