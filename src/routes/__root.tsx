import {
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../ui/Header/Header'
import type { QueryClient } from '@tanstack/react-query'
import Sidebar from '@/ui/Sidebar/Sidebar'

import '@/styles/layout.scss'

// Define what the context looks like
interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="app-layout">
        <Header />
        <Sidebar />

        <div className="main">
          <Outlet />
        </div>
      </div>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
