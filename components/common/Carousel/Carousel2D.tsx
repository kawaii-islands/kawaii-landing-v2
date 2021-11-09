import React from "react";
import cn from "classnames/bind";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import styles from "./Carousel2D.module.scss";

const cx = cn.bind(styles);

const responsive = {
    tablet: {
        breakpoint: { max: 1199, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Carousel2D: React.FC<{ list: any[] }> = ({ list }) => {
    const userAgent = navigator.userAgent;
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";

    return (
        <Carousel
            additionalTransfrom={0}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            arrows={false}
            ssr={false} // means to render carousel on server-side.
            infinite={false}
            // autoPlay={deviceType !== "mobile" ? true : false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            removeArrowOnDeviceType={[]}
            deviceType={deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            // centerMode
        >
            <div
                className={cx("carousel-item")}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/mapleblock-logo.png"}
                        style={{ width: "80%" }}
                        onClick={() =>
                            window.open(
                                "https://www.mapleblock.capital/",
                                "_blank"
                            )
                        }
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/signum-logo.png"}
                        style={{ width: "80%" }}
                        onClick={() =>
                            window.open("https://www.signum.capital/", "_blank")
                        }
                    />
                </div>

                {/* <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}
                >
                    <img src={dfgLogo} width={"30%"} />
                    <img src={jsquareLogo} width={"30%"} />
                    <img src={au21Logo} width={"30%"} />
                </div> */}
            </div>

            <div className={cx("carousel-item")}>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/hyperchain-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open(
                                "https://www.hyperchain.capital/",
                                "_blank"
                            )
                        }
                        style={{ width: `${(122 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/dfg-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://www.dfg.group/", "_blank")
                        }
                        style={{ width: `${(145 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/jsquare-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://www.jsquare.co/", "_blank")
                        }
                        style={{ width: `${(182 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/au21-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://au21.capital/", "_blank")
                        }
                        style={{ width: `${(138 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/x21-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://x21digital.com/", "_blank")
                        }
                        style={{ width: `${(95 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/skyvision-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open(
                                "https://www.skyvisionpartners.com/",
                                "_blank"
                            )
                        }
                        style={{ width: `${(145 / 217) * 100}%` }}
                    />
                </div>
            </div>
            <div className={cx("carousel-item")}>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/rikkei-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://rikkei.finance/", "_blank")
                        }
                        style={{ width: `${(108 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/images/suga_logo_black.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://thesugagroup.com", "_blank")
                        }
                        style={{ width: `${(102 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/images/orai-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open(
                                "https://orai.io/?ref=kawaii-global",
                                "_blank"
                            )
                        }
                        style={{ width: `${(196 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/images/imba_logo_black.png"}
                        className={cx("logo")}
                        onClick={() => window.open("https://imba.co", "_blank")}
                        style={{ width: `${(105 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/kyros-logo.png"}
                        className={cx("logo")}
                        onClick={() =>
                            window.open("https://kyros.ventures/", "_blank")
                        }
                        style={{ width: `${(162 / 217) * 100}%` }}
                    />
                </div>
                <div style={{ width: "33%", textAlign: "center" }}>
                    <img
                        alt=""
                        src={"/images/logos/shinchan-logo.png"}
                        className={cx("logo")}
                        // onClick={() => window.open("#", "_blank")}
                        style={{ width: `${(85 / 217) * 100}%` }}
                    />
                </div>
            </div>
            <div className={cx("carousel-item")}>
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/icn-logo.png"}
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
                </div>
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/kardiachain-logo.png"}
                        className={cx("logo")}
                        alt=""
                        onClick={() =>
                            window.open("https://kardiachain.io/", "_blank")
                        }
                        style={{ width: `${(196 / 260) * 100}%` }}
                    />
                </div>
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/MasterVentures-logo.png"}
                        className={cx("logo")}
                        alt=""
                        onClick={() =>
                            window.open("https://master.ventures/", "_blank")
                        }
                        style={{ width: `${(282 / 400) * 100}%` }}
                    />
                </div>

                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/okex-logo.png"}
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
                </div>
            </div>
            <div className={cx("carousel-item")}>
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/chainboost-logo.png"}
                        className={cx("logo")}
                        alt=""
                        onClick={() =>
                            window.open("https://chainboost.io/", "_blank")
                        }
                        style={{ width: `${(79 / 260) * 100}%` }}
                    />
                </div>

                {/* row5 */}
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/m6-logo.png"}
                        className={cx("logo")}
                        alt=""
                        onClick={() =>
                            window.open("https://momentum6.com/", "_blank")
                        }
                        style={{ width: `${(187 / 325) * 100}%` }}
                    />
                </div>
                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/tkventure-logo.png"}
                        className={cx("logo")}
                        alt=""
                        onClick={() =>
                            window.open("https://tk.ventures/", "_blank")
                        }
                        style={{ width: `${(231 / 325) * 100}%` }}
                    />
                </div>

                <div style={{ width: "50%", textAlign: "center" }}>
                    <img
                        src={"/images/logos/polkastarter-logo.png"}
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
                </div>
            </div>
        </Carousel>
    );
};

export default Carousel2D;
