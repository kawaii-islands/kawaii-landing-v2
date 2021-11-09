import React from "react";
import cn from "classnames/bind";
import styles from "./Loading.module.scss";
import loadingProcess from "src/assets/icons/loading-price.svg";

const cx = cn.bind(styles);

const Loading = () => {
    return (
        <div className={cx("icn-spinner")}>
            <img src={loadingProcess} alt="icon_loading" />
        </div>
    )
}

export default Loading;
