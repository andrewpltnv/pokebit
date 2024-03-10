import { Button, Drawer, Layout } from "antd";
import { SearchByName } from "./SearchByName";
import { useToggle } from "ahooks";

export const Footer = () => {
  const [isOpen, { toggle }] = useToggle(false);
  return (
    <Layout.Footer className=" mt-4 inline-flex min-w-full justify-center bg-rose-500">
      <Drawer
        placement="bottom"
        open={isOpen}
        onClose={{ toggle }.toggle}
        width={400}
        extra={<SearchByName />}
      >
        <ul>
          <li>Type</li>
          <li>Type as</li>
          <li>Type</li>
          <li>Type</li>
          <li>Type</li>
        </ul>
      </Drawer>
      <Button
        type="primary"
        block
        onClick={toggle}
        className="m-auto border-gray-400"
      >
        Filters...
      </Button>
    </Layout.Footer>
  );
};
