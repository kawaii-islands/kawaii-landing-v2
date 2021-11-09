import React from "react";
import cn from "classnames/bind";
import styles from "./Feature.module.scss";

const cx = cn.bind(styles);

const Intro: React.FC<{}> = ({ }) => {
    return (
        <div className={cx("feature")}>
            <div className={cx("left")}>
                <div className={cx("title")}>
                    <div className={cx("top")}>
                        <img src="/images/images/B.png" alt="" />
                        <div className={cx("text")}>
                            uild your own business on-chain and grow your
                            creativity
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Grow and manage plenty of magical resources </li>
                    <li>
                        Create various types of furniture for your house on the
                        cloud
                    </li>
                    <li>
                        Fulfill challenging orders to earn your fortune and
                        prestige
                    </li>
                    <li>
                        Show your unique style through different self-tailored
                        outfits
                    </li>
                    <li>Meet up and hang out with other Kawaii residents</li>
                    <li>
                        Experience straightforward and attractive play-to-earn
                        opportunities
                    </li>
                </ul>
                <div style={{ textAlign: "center" }}>
                    <a href="https://blog.kawaii.global/" target="_blank" rel="noreferrer">
                        <button className={cx("button")}>
                            GET LATEST NEWS
                        </button>
                    </a>
                </div>
            </div>
            <div className={cx("right")}>
                <img
                    src="/images/images/feature-island.png"
                    className={cx("island")}
                />
                <img
                    src="/images/images/move-cloud-2.png"
                    className={cx("move-cloud-1")}
                />
                <img
                    src="/images/images/move-cloud-3.png"
                    className={cx("move-cloud-2")}
                />
            </div>
            <div className={cx("island-mobile")}>
                <img src="images/images/feature.png" />
            </div>
        </div>
    );
};

export default Intro;
