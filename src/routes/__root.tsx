import { Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'
import NotFound from '../shared/ui/not found/NotFound'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent() {
        return (
            <NotFound />
        )

    },
})

function RootComponent() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}
