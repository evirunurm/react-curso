import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>Cabecera</header>
      <main>{children}</main>
      <footer>Pie de página</footer>
    </div>
  )
}

export default Layout
