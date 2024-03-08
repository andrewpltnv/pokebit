import { App, Layout } from "antd";
import FloatButton from "antd/es/float-button/FloatButton";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function RootLayout() {
  return (
    <App>
      <Layout className="flex min-h-svh flex-col ">
        <Header />
        <Outlet />
        <Footer />
        <FloatButton.BackTop />
      </Layout>
    </App>
  );
}

export { RootLayout };
