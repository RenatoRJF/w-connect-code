import { useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import SiteContainer from "./components/SiteContainer/SiteContainer";

import { MenuListProps } from "./interfaces/MenuList.interface";
import { axiosGet } from "./hooks/useAxios";

import './App.css'

export default function App() {
  const apiGet = axiosGet<Array<MenuListProps>>();
  const { data } = apiGet.response || {};

  useEffect(() => {
    apiGet.request("/menu");
  }, []);

  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Layout meunList={data} />}>
          {data?.map((menuItem, index) => (
            <Fragment key={menuItem.slug}>
              {/* render main routes */}
              <Route
                index={index === 0}
                path={menuItem.slug}
                element={<SiteContainer {...menuItem} />}
              />

              {/* render sub-routes */}
              {menuItem?.children?.map((childrenMenuItem) => (
                <Route
                  key={childrenMenuItem.slug}
                  path={childrenMenuItem.slug}
                  element={<SiteContainer {...childrenMenuItem} />}
                />
              ))}
            </Fragment>
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
}
