import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `#222224`,
            borderBottom: "1px solid #f0f0f0"
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1rem`
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/pokedex/"
                    style={{
                        color: `#f0f0f0`,
                        textDecoration: `none`
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
