import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    paddingTop: 0
                }}
            >
                <main>{children}</main>
            </div>
            <footer
                style={{
                    backgroundColor: "#222224",
                    borderTop: "1px solid #f0f0f0",
                    borderBottom: "2px solid #222224",
                    color: "#f0f0f0"
                }}
            >
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: "0.5rem"
                    }}
                >
                    © {new Date().getFullYear()} -{" "}
                    <a
                        href="https://github.com/waterval"
                        target="_blank"
                        style={{ color: "#f0f0f0" }}
                    >
                        Waterval
                    </a>
                    .
                </div>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
