//@ts-nocheck
import React from "react";
import cn from "classnames/bind";
import styles from "./Partner.module.scss";
import { Grid } from "@material-ui/core";
// import "./Partner.scss";
import Carousel from "../../common/Carousel/Carousel2D";
import { useCheckMobileScreen } from "../../../utils/hooks";
import Link from 'next/link';

const cx = cn.bind(styles);

const Partner: React.FC<{}> = ({}) => {
    const isMobileScreenLTE = useCheckMobileScreen(1200);
    return (
        <>
            <div className={cx("partner")}>
                <div className={cx("title")}>
                    <div className={cx("frame")} />
                    <div className={cx("name")}> Partners and Investors </div>
                </div>

                {isMobileScreenLTE ? (
                    <div className={cx("board-mobile")}>
                        <Carousel />
                    </div>
                ) : (
                    <div className={cx("board")}>
                        <Grid container justifyContent="space-evenly">
                            {/* row1 */}
                            <Grid item xs={7} className={cx("item")}>
                                <img
                                    src={'/images/logos/mapleblock-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.mapleblock.capital/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `80%` }}
                                />
                            </Grid>
                            <Grid item xs={5} className={cx("item")}>
                                <img
                                    src={"/images/logos/signum-logo.png"}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.signum.capital/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `80%` }}
                                />
                            </Grid>
                            {/* row2 */}
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/hyperchain-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.hyperchain.capital/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(122 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/dfg-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.dfg.group/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(145 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/jsquare-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.jsquare.co/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(182 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/au21-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://au21.capital/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(138 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/x21-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://x21digital.com/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(95 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/skyvision-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.skyvisionpartners.com/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(145 / 217) * 100}%` }}
                                />
                            </Grid>
                            {/* row3 */}
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/rikkei-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://rikkei.finance/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(108 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/images/suga_logo_black.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://thesugagroup.com",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(102 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/images/orai-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://orai.io/?ref=kawaii-global",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(196 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/images/imba_logo_black.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open("https://imba.co", "_blank")
                                    }
                                    style={{ width: `${(105 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/kyros-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://kyros.ventures/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(162 / 217) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/shinchan-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    // onClick={() => window.open("#", "_blank")}
                                    style={{ width: `${(85 / 217) * 100}%` }}
                                />
                            </Grid>
                            {/* row4 */}
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/icn-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://indonesiacrypto.network/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(128 / 260) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/kardiachain-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://kardiachain.io/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(196 / 260) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={3} className={cx("item")}>
                                <img
                                    src={'/images/logos/MasterVentures-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://master.ventures/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(282 / 400) * 100}%` }}
                                />
                            </Grid>

                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/okex-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.okex.com/blockdream-ventures",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(248 / 260) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={2} className={cx("item")}>
                                <img
                                    src={'/images/logos/chainboost-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://chainboost.io/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(79 / 260) * 100}%` }}
                                />
                            </Grid>

                            {/* row5 */}
                            <Grid item xs={3} className={cx("item")}>
                                <img
                                    src={'/images/logos/m6-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://momentum6.com/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(187 / 325) * 100}%` }}
                                />
                            </Grid>
                            <Grid item xs={3} className={cx("item")}>
                                <img
                                    src={'images/logos/tkventure-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://tk.ventures/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(231 / 325) * 100}%` }}
                                />
                            </Grid>

                            <Grid item xs={6} className={cx("item")}>
                                <img
                                    src={'/images/logos/polkastarter-logo.png'}
                                    className={cx("logo")}
                                    alt=""
                                    onClick={() =>
                                        window.open(
                                            "https://www.polkastarter.com/",
                                            "_blank"
                                        )
                                    }
                                    style={{ width: `${(508 / 650) * 100}%` }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
            <div className={cx("bottom")}>
                <Grid
                    container
                    spacing={0}
                    style={{ justifyContent: "center" }}
                >
                    <Grid item lg={4} />
                    <Grid item lg={4} md={6} xs={7} className={cx("middle")}>
                        <div className={cx("farewell")}>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>
                        <div></div>
                        <div
                            className="ml-form-embed"
                            data-account="3363229:y4l0u0e1x1"
                            data-form="4559794:s2f9u8"
                        ></div>
                    </Grid>
                    <Grid item lg={4} md={7} className={cx("right")}>
                        <img
                            src={"/images/images/top-logo.png"}
                            alt="kawaiiLogo"
                            className={cx("logo")}
                            alt="top-logo"
                        />
                    </Grid>
                    <Grid item lg={8} />
                    <Grid item sm={8} lg={4} className={cx("right")} />
                    <Grid item lg={4}></Grid>
                    <Grid item md={4} className={cx("middle")}>
                        <div className={cx("nav-links")}>
                            <a
                                href="https://play.kawaii.global/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Game
                            </a>
                            <a
                                href="https://kawaii-islands.airight.io/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Marketplace
                            </a>
                            <a
                                href="https://docs.kawaii.global/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Docs
                            </a>
                            <Link href="/media-kit">MediaKit</Link>
                        </div>
                    </Grid>
                    <Grid item lg={4}>
                        <div className={cx("follow")}>
                            Follow us and get updated!
                        </div>
                        <div className={cx("social-icon")}>
                            <img
                                src={"/images/images/icon-utube.png"}
                                onClick={() =>
                                    window.open(
                                        "https://www.youtube.com/channel/UCSEQB4NGDMeqQBRNPyEkaJQ",
                                        "_blank"
                                    )
                                }
                            />
                            <img
                                src={"/images/images/icon-fb.png"}
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/kawaii.islands.official",
                                        "_blank"
                                    )
                                }
                            />
                            <img
                                src={"/images/images/icon-discord.png"}
                                onClick={() =>
                                    window.open(
                                        "https://discord.com/invite/nN4FDesACB",
                                        "_blank"
                                    )
                                }
                            />
                            <img
                                src={"/images/images/icon-twitter.png"}
                                onClick={() =>
                                    window.open(
                                        "https://twitter.com/kawaii_islands",
                                        "_blank"
                                    )
                                }
                            />
                            <img
                                src={"/images/images/icon-telegram.png"}
                                onClick={() =>
                                    window.open(
                                        "https://t.me/kawaii_islands",
                                        "_blank"
                                    )
                                }
                            />
                            <img
                                src={"/images/images/icon-medium.png"}
                                onClick={() =>
                                    window.open(
                                        "https://blog.kawaii.global/",
                                        "_blank"
                                    )
                                }
                            />
                        </div>
                    </Grid>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4} xs={10} className={cx("middle")}>
                        <div className={cx("copyright")}>
                            ©2021 SmartML Incorporated.
                            <br />
                            All rights reserved.
                        </div>
                    </Grid>
                    <Grid item lg={4}></Grid>
                </Grid>
            </div>
        </>
    );
};

export default Partner;
