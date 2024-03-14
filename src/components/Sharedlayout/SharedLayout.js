import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../../../src/components/Loader/Loader";
import { Header } from "../../../src/components/Header/Header";
import { Footer } from "../Footer/Footer";
import { SectionContainer } from "../../Container.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <SectionContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
};
