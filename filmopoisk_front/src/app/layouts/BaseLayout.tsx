import Layout from "@/shared/Layout/Layout";
import Header from "@/widgets/header/Header";
import LayoutProfile from "@/widgets/layoutProfile/LayoutProfile";

const content = {
  logoText: "Фильмопоиск",
};

export const BaseLayout = <Layout headerSlot={<Header logoText={content.logoText} children={<LayoutProfile />} />} />;
