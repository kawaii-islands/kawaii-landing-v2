import React from "react";
import styles from "./Roadmap.module.scss";
import cn from "classnames/bind";
import { useCheckMobileScreen } from "../../../utils/hooks";

const cx = cn.bind(styles);

const Roadmap: React.FC<{}> = ({ }) => {
    const isMobileScreenLTE = useCheckMobileScreen(1199);
    return (
        <div className={cx("roadmap")}>
            <img
                src={isMobileScreenLTE ? "/images/images/roadmap-mobile.png" : "/images/images/roadmap.png"}
                className={cx("background")}
            />
            {isMobileScreenLTE || (
                <>
                    <img
                        src="/images/images/move-cloud-2.png"
                        className={cx("move-cloud-1")}
                    />
                    <img
                        src="/images/images/move-cloud-4.png"
                        className={cx("move-cloud-2")}
                    />
                    <img
                        src="/images/images/move-cloud-5.png"
                        className={cx("move-cloud-3")}
                    />
                    <img
                        src="/images//images/boat1.png"
                        className={cx("boat-1")}
                    />
                    <img
                        src="/images/images/boat4.png"
                        className={cx("boat-2")}
                    />
                    <img
                        src="/images/images/boat5.png"
                        className={cx("boat-3")}
                    />
                </>
            )}
        </div>
    );
};

export default Roadmap;
