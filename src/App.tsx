import { App, Layout } from "antd";
import FloatButton from "antd/es/float-button/FloatButton";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

const { Content, Footer } = Layout;

function RootLayout() {
  return (
    <App>
      <Layout className="flex min-h-svh flex-col bg-slate-300">
        <Header />
        <Content
          className="p-4 text-center"
          style={{ textAlign: "center", paddingBottom: "1rem" }}
        >
          <Outlet />
        </Content>
        <Footer className="mt-6 bg-rose-700">Footer</Footer>
      </Layout>
      <FloatButton.BackTop />
    </App>
  );
}

export { RootLayout };
