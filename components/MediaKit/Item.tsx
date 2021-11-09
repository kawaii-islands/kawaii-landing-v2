import React from "react";
import cn from "classnames/bind";
import styles from "./Item.module.scss";

const cx = cn.bind(styles);

const Item: React.FC<{
    title: any;
    hexColor: any;
    rgbColor: any;
    isLinear: any
}> = ({ title, hexColor, rgbColor, isLinear }) => {

    return (
        <div className={cx("item")}>
            <div className={cx("top")}>{title}</div>
            <div
                className={cx("middle")}
                style={{ background: isLinear ? `linear-gradient(${hexColor})` : hexColor }}>
            </div>
            <div className={cx("bottom")}>
                <div className={cx("color-code", "uppercase")}>
                    <span>{hexColor}</span>
                    <img
                        src={"/images/icons/copy.svg"}
                        alt="copy-icon"
                        onClick={() => navigator.clipboard.writeText(hexColor)}
                    />
                </div>
                <div className={cx("color-code")}>
                    <span>{rgbColor}</span>
                    <img
                        src={"/images/icons/copy.svg"}
                        alt="copy-icon"
                        onClick={() => navigator.clipboard.writeText(rgbColor)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Item;