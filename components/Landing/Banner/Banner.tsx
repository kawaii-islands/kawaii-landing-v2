//@ts-nocheck
import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./Banner.module.scss";
// import "./Banner.scss";
import { Modal } from "react-bootstrap";
import { useCheckMobileScreen } from "../../../utils/hooks";

const cx = cn.bind(styles);

const Banner: React.FC<{}> = ({ }) => {
    const [show, setShow] = useState(false);
    const isMobile = useCheckMobileScreen(1665);
    return (
        <>
            <div className={cx("banner")}>
                <div className={cx("left")}>
                    <img
                        src="/images/images/top-island.png"
                        className={cx("top-island")}
                    />
                    <img
                        src="/images/images/boat1.png"
                        className={cx("boat1")}
                    />
                    <img
                        src="/images/images/boat2.png"
                        className={cx("boat2")}
                    />
                    <img
                        src="/images/images/boat3.png"
                        className={cx("boat3")}
                    />
                    <img
                        src="/images/images/move-cloud-1.png"
                        className={cx("move-cloud1")}
                    />
                    <img
                        src="/images/images/move-cloud-2.png"
                        className={cx("move-cloud2")}
                    />
                </div>
                <div className={cx("intro")}>
                    <div className={cx("logo")}>
                        <img
                            src="/images/images/top-logo.png"
                        />
                    </div>

                    <div className={cx("title")}>
                        <img
                            src="/images/images/A.png"
                        />
                        <div className={cx("text")}>
                            n Enchanting {isMobile && <br />} Anime Metaverse
                        </div>
                    </div>
                    <div className={cx("description")}>
                        Kawaii Islands creates a fantasy universe on the cloud
                        for multiplayers to experience a whole set of simulation
                        gaming including designing, building, crafting, farming,
                        social-networking. <br />
                        Especially, by gamifying several DeFi mechanisms, Kawaii
                        Islands will bring players a new dimension of mixed
                        entertainment and earning.
                        <div className={cx("buttons")}>
                            <a
                                className={cx("buttons-button")}
                                href="https://play.kawaii.global/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/images/playnow.png"
                                />
                            </a>
                            <div className={cx("buttons-button")}>
                                <img
                                    src="/images/images/appstore.png"
                                />
                            </div>
                            <div className={cx("buttons-button")}>
                                <img
                                    src="/images/images/ggplay.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("block")}>
                        <button
                            className={cx("button")}
                            onClick={() => setShow(true)}
                        >
                            GAME TRAILER
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx("banner-mobile")}>
                <div className={cx("logo")}>
                    <img
                        src="/images/images/top-logo.png"
                    />
                </div>

                <div className={cx("title")}>
                    <div className={cx("text")}>
                        An Enchanting Anime Metaverse
                    </div>
                </div>
                <div className={cx("island")}>
                    <img
                        src="/images/images/top-island.png"
                        className={cx("top-island")}
                    />
                    <img
                        src="/images/images/boat1.png"
                        className={cx("boat1")}
                    />
                    <img
                        src="/images/images/boat2.png"
                        className={cx("boat2")}
                    />
                    <img
                        src="/images/images/boat3.png"
                        className={cx("boat3")}
                    />
                </div>
                <div className={cx("description")}>
                    Kawaii Islands creates a fantasy universe on the cloud for
                    multiplayers to experience a whole set of simulation gaming
                    including designing, building, crafting, farming,
                    social-networking.
                </div>
                <div className={cx("description")}>
                    Especially, by gamifying several DeFi mechanisms, Kawaii
                    Islands will bring players a new dimension of mixed
                    entertainment and earning.
                </div>
                <div className={cx("buttons")}>
                    <a
                        className={cx("buttons-button")}
                        href="https://play.kawaii.global/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="images/images/playnow.png"
                        />
                    </a>
                    <div className={cx("buttons-button")}>
                        <img
                            src="/images/images/appstore.png"
                        />
                    </div>
                    <div className={cx("buttons-button")}>
                        <img
                            src="/images/images/ggplay.png"
                        />
                    </div>
                </div>
                <div className={cx("block")}>
                    <button
                        className={cx("button")}
                        onClick={() => setShow(true)}
                    >
                        GAME TRAILER
                    </button>
                </div>
            </div>
            <Modal
                dialogClassName={cx("teaser")}
                centered
                show={show}
                animation={true}
                onHide={() => {
                    setShow(false);
                }}
            >
                <Modal.Body>
                    <div
                        className={cx("close-icon")}
                        onClick={() => setShow(false)}
                    >
                        {/* <div class={cx("mdiv")}>
                            <div class={cx("md")}></div>
                        </div> */}
                    </div>
                    <div className={"youtube"}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/O-Hz_vTmmhU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Banner;
