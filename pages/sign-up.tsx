import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import AuthLayout from "@/components/layouts/auth-layout";
import FormSignUp from "@/components/form-sign-up";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <FormSignUp />
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
