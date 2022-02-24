import { Routes, Route } from "react-router-dom";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import { routes } from "routes";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.isProtected) {
          return (
            <Route key={index} element={<Layout route={route} />}>
              <Route path={route.path} element={<route.Component />} />
              {route?.children?.map((child, i) => (
                <Route
                  key={i}
                  path={child.path}
                  element={<child.Component />}
                />
              ))}
            </Route>
          );
        }
        return (
          <Route key={index} path={route.path} element={<route.Component />} />
        );
      })}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
