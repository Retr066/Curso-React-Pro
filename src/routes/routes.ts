import { lazy } from "react";
import { ShoppingPage } from "../component-pattern/pages/ShoppingPage";
import { NotLazy } from "../lazyload/pages/NotLazy";

const Layout = lazy(() => import(/* webpackChunkName:"LazyPage1" */ "../lazyload/layout/Layout"));

type JSXComponent = () => JSX.Element;

interface routesProps {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: routesProps[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: Layout,
    name: "Lazy-1",
  },
  {
    to: "/not-lazy",
    path: "not-lazy",
    Component: NotLazy,
    name: "Not Lazy Dash",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "Shopping Page",
  },
];
