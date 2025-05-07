import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import "animate.css/animate.min.css";
import allRoutes from "./routes";
import PrivateRoute from "./PrivateRoute";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="pt-3 text-center" />}>
        <RouteScrollToTop />
        <PhosphorIconInit />

        <Routes>
          {allRoutes.routes.map(({ path, name, component: Component }) =>
            <Route key={name} path={path} element={<Component />} />
          )}
          <Route path="/" element={<PrivateRoute />}>
            {allRoutes.privateRoutes.map(
              ({ path, name, component: Component }) =>
                <Route key={name} path={path} element={<Component />} />
            )}
          </Route>
          {/* Optionally, add a fallback route for 404 Not Found */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
