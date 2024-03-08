import { Link } from "react-router-dom";
import { Affix, Layout } from "antd";

export const LogoHeading = () => (
  <Link to="/" className="prose">
    <h2 className="inline-block text-yellow-100 no-underline">Pokedex</h2>
  </Link>
);

export function Header() {
  return (
    <Affix rootClassName="shadow-sm shadow-neutral-400">
      <Layout.Header className="inline-flex min-w-full items-center justify-evenly gap-4 bg-rose-500 px-4 text-center">
        <LogoHeading />
      </Layout.Header>
    </Affix>
  );
}
