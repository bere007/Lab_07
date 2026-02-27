import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";

// Lazy imports
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const BrokenPage = lazy(() => import("./pages/BrokenPage"));

function Loading() {
  return <p style={{ padding: "20px" }}>Loading...</p>;
}

// Теперь fallback принимает resetError
function ErrorFallback({ resetError }: { resetError: () => void }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong</h2>
      <p>Lazy component crashed or failed to load.</p>

      <button
        onClick={() => {
          resetError();
          window.location.href = "/";
        }}
      >
        Try Again
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/broken">Broken</Link>
      </nav>

      <ErrorBoundary
        fallback={(reset) => <ErrorFallback resetError={reset} />}
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/broken" element={<BrokenPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);