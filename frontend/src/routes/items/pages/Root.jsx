import { Outlet } from "react-router-dom"
import { ItemProvider } from "../hooks/ItemProvider"

export const Root = () => {
  return <ItemProvider>
      <Outlet></Outlet>
    </ItemProvider>
}