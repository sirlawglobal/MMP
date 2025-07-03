// app/routes/admin.debug.tsx
import { useMatches } from "@remix-run/react";

export default function DebugRoute() {
  const matches = useMatches();
  return (
    <div>
      <h1>Route Debugger</h1>
      <pre>{JSON.stringify(matches, null, 2)}</pre>
    </div>
  );
}