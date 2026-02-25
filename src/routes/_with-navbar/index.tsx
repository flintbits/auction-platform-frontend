import { createFileRoute } from '@tanstack/react-router'
import TestComponent from '../../tests/TestComponent'

export const Route = createFileRoute('/_with-navbar/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>
        <TestComponent />
    </div>
}
