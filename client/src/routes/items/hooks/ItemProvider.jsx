import { useItemStore } from "./store"
import {ItemContextProvider} from "./context"

export const ItemProvider = ({children}) => {
  const store = useItemStore()
  
  return <ItemContextProvider value={store}>
    {children}
  </ItemContextProvider>
}