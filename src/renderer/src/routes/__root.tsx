import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import '../assets/app.css'

const RootLayout = (): React.JSX.Element => (
  <>
    <div className="flex flex-col min-h-dvh">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/versions" className="[&.active]:font-bold">
          Versions
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({
  component: RootLayout
})
