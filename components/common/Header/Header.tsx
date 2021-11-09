// @ts-nocheck
import React, { useRef } from "react";
import cn from "classnames/bind";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from 'next/router'
import { useCheckMobileScreen } from "../../../utils/hooks";
import NavLinks from "./NavLinks";
import styles from "./Header.module.scss";

const cx = cn.bind(styles);

const Header: React.FC<{}> = () => {
    const isMobileScreenLTE = useCheckMobileScreen(1199);
    const router = useRouter();

    const navbar = useRef();

    const hideDropdown = () => {
        if (!navbar?.current?.classList?.contains?.("collapsed")) {
            navbar?.current?.click();
        }
    };

    return (
        <>
            {isMobileScreenLTE ? (
                <>
                    <Navbar expand="xl" className={cx("navbar")}>
                        <div className={cx("navbar-container")}>
                            <Navbar.Toggle
                                ref={navbar}
                                className={cx("nav-toggle")}
                                aria-controls="basic-navbar-nav"
                            >
                                <img
                                    src="/images/icons/menu.png"
                                />
                            </Navbar.Toggle>
                        </div>
                        <Navbar.Collapse
                            className={cx("navbar-custom")}
                            id="basic-navbar-nav"
                        >
                            <img
                                onClick={hideDropdown}
                                className={cx("icon-cancel")}
                                src={"/images/images/iconX.png"}
                                alt=""
                            />
                            <Nav
                                className={`justify-content-end align-items-center ${cx(
                                    "navbar-dropdown"
                                )}`}
                            >
                                <NavLinks
                                    onItemClick={hideDropdown}
                                    current={router.pathname}
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
            ) : (
                <Navbar expand="xl" className={cx("navbar")}>
                    <Container>
                        <Navbar.Collapse
                            className={cx("")}
                            id="basic-navbar-nav"
                        >
                            <Nav
                                className={`justify-content-end align-items-center ${cx(
                                    "navbar-dropdown"
                                )}`}
                            >
                                <NavLinks
                                    onItemClick={hideDropdown}
                                    current={router.pathname}
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </>
    );
};

export default Header;