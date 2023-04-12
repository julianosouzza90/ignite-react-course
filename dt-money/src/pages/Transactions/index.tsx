import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const {transactions} = useContext(TransactionContext)
  return (
    <div>
      <Header/>
      <Summary/>
        <TransactionsContainer>
          <SearchForm/>
          <TransactionsTable>
            <tbody>
            {
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td><PriceHightLight variant="income">{priceFormatter.format(transaction.price)}</PriceHightLight></td>
                  <td>{transaction.type}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              ))
            }
            </tbody>
          
          </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}