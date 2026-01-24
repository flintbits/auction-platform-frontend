import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent() {
        return (
            <div>
                <p>Not found!hfefshsffkubv</p>
                <Link to="/">Go home</Link>
            </div>
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
