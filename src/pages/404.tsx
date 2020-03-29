import * as React from "react";
import Layout from "../components/general/layout";
import SEO from "../components/general/seo";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>Page not found</h1>
        <p>This page does not exist.</p>
    </Layout>
);

export default NotFoundPage;
