import React from "react";
import { Helmet } from "react-helmet";
import PageContainer from "../../layouts/PageContainer";
const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="SETTINGS">
        <h1>settings</h1>
      </PageContainer>
    </>
  );
};

export default Settings;
