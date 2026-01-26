import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-navbar/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        {/* <TestComponent /> */}
    </div>
}
