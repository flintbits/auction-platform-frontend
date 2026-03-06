import { createFileRoute, Outlet } from '@tanstack/react-router';
import Sidebar from '../widgets/Sidebar/Sidebar';

export const Route = createFileRoute('/_with-sidebar')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "24px",
          overflow: "auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
