import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TransactionProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionProvider>
         <Transactions/>
      </TransactionProvider>
    </ThemeProvider>
  )
}