import { Header } from "@widgets/Header";
import { Main } from "@widgets/Main";
import { Sidebar } from "@widgets/Sidebar";
import { PageContainer } from "./parts";

export const Home = () => {
  return (
    <PageContainer>
      <Header />
      <Main />
      <Sidebar />
    </PageContainer>
  );
};
