import React, { useState } from "react";
import { useCheckMobileScreen } from "../../../utils/hooks";
import WrapLink from "../WrapLink/WrapLink";
import Link from 'next/link';
import cn from "classnames/bind";
import { NavDropdown } from "react-bootstrap";
import styles from "./NavLinks.module.scss";
import Tooltip from "@material-ui/core/Tooltip";

const cx = cn.bind(styles);

type LinkProps = {
    path: string;
    title: any;
    description?: string;
    items?: LinkProps[];
};

type NavLinksProps = {
    items?: LinkProps[];
    current: string;
    onItemClick?: Function;
};

export const Links: LinkProps[] = [
    {
        path: "https://airight.io/nft-farming",
        title: "KWT Staking",
        description: "KWT Staking",
    },
    {
        path: "https://nft.trava.finance/marketplace",
        title: "NFT Renting",
        description: "NFT Renting",
    },
    {
        path: "https://kawaii-islands.airight.io/",
        title: "Marketplace",
        description: "Marketplace",
    },
    {
        title: "Docs",
        path: "#docs",
        items: [
            {
                title: "Litepaper",
                path: "/litepaper.pdf",
            },
            {
                title: "Tokenomics",
                path: "https://blog.kawaii.global/kawaii-token-kwt-tokenomics-649108b6338d",
            },
            {
                title: "How to play",
                path: "https://docs.kawaii.global/game-play",
            },
        ],
    },
    {
        title: "Community",
        path: "#community",
        items: [
            {
                title: "Twitter",
                path: "https://twitter.com/kawaii_islands",
            },
            {
                title: "Telegram",
                path: "https://t.me/kawaii_islands",
            },
            {
                title: "Blog",
                path: "https://blog.kawaii.global/",
            },
            {
                title: "Facebook",
                path: "https://www.facebook.com/kawaii.islands.official",
            },
            {
                title: "Discord",
                path: "https://discord.com/invite/nN4FDesACB",
            },
            {
                title: "Youtube",
                path: "https://www.youtube.com/channel/UCSEQB4NGDMeqQBRNPyEkaJQ",
            },
        ],
    },
    {
        path: "https://play.kawaii.global/",
        title: "Play now",
        description: "Play now",
    },
];

const NavLinkChildren: React.FC<LinkProps> = ({ items, title, path }) => {
    const [show, setShow] = useState(false);
    const isMobileScreenLTE = useCheckMobileScreen(1200);
    const showDropdown = () => {
        setShow(!show);
    };
    const hideDropdown = () => {
        setShow(false);
    };
    return (
        <NavDropdown
            className={cx("nav-dropdown")}
            id={path}
            title={title}
            show={isMobileScreenLTE || show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            onClick={() => setShow(!show)}
        >
            {items?.map(({ path, title, description }) => {
                if (title === "Litepaper") {
                    return (
                        <a
                            href="/litepaper.pdf"
                            className={cx("dropdown-item")}
                            target="_blank"
                        >
                            {title}
                        </a>
                    );
                }
                if (path?.startsWith("http")) {
                    return (
                        <NavDropdown.Item
                            title={description}
                            href={path}
                            key={title}
                            target="_blank"
                        >
                            {title}
                        </NavDropdown.Item>
                    );
                }
                if (path === "") {
                    return (
                        <Tooltip
                            arrow
                            title={
                                <div style={{ fontSize: 16, padding: 10 }}>
                                    Coming soon in September!
                                </div>
                            }
                            placement="right"
                        >
                            <NavDropdown.Item
                                key={title}
                                as={Link}
                                title={description}
                                to={path}
                            >
                                {title}
                            </NavDropdown.Item>
                        </Tooltip>
                    );
                }
                return (
                    <NavDropdown.Item
                        key={title}
                        as={Link}
                        title={description}
                        to={path}
                    >
                        {title}
                    </NavDropdown.Item>
                );
            })}
        </NavDropdown>
    );
};

const NavLinks: React.FC<NavLinksProps> = ({
    items = Links,
    current,
    onItemClick,
}) => {
    return (
        <>
            {items.map((child) => {
                const { path, title, description } = child;
                if (child?.path === "") {
                    return (
                        <Tooltip
                            arrow
                            title={
                                <div style={{ fontSize: 16, padding: 10 }}>
                                    Coming soon in September!
                                </div>
                            }
                            placement="top"
                        >
                            <div
                                key={title}
                                className={cx("nav-link", {
                                    icon: description === "icon",
                                })}
                            >
                                {title}
                            </div>
                        </Tooltip>
                    );
                }
                if (child?.items) {
                    return <NavLinkChildren key={child.title} {...child} />;
                }
                return (
                    <WrapLink
                        onClick={onItemClick}
                        key={path}
                        className={cx(
                            description === "Play now"
                                ? "play-now"
                                : "nav-link",
                            {
                                icon: description === "icon",
                            }
                        )}
                        to={path}
                    >
                        {title}
                    </WrapLink>
                );
            })}
        </>
    );
};

export default NavLinks;
