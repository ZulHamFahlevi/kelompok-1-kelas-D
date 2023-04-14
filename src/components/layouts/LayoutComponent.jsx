import { Layout } from "antd";
// import FooterComponent from "./Footer/FooterComponent";
import HeaderComponent from "./Header/HeaderComponent";
import SocialComponent from "./Social/SocialComponent";
export default function LayoutComponent(props) {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <HeaderComponent />
      {props.children}
      <SocialComponent />
      {/* <FooterComponent /> */}
    </Layout>
  );
}
