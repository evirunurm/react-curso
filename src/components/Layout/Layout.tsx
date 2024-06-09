import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header title="mi titulo" />
      <main>{children}</main>
      <footer>Pie de página</footer>
    </div>
  )
}

export default Layout
