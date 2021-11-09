import React, { useRef, useEffect } from "react";
import cn from "classnames/bind";
import _ from "lodash";
import styles from "./Background.module.scss";
const cx = cn.bind(styles);

const Background: React.FC<{
    topVariant?: string;
    bottomVariant?: string | boolean;
    backgroundImage?: string;
    mainBackgroundStyle?: string;
}> = ({ topVariant, bottomVariant, backgroundImage, mainBackgroundStyle }) => {
    const bottomBackgroundRef: any = useRef(null);

    const resizeBottomBackground = (): void => {
        if (!_.isNil(bottomBackgroundRef.current)) {
            bottomBackgroundRef.current.style.height = document.body.offsetHeight - 415 + "px";
        }
    };

    useEffect(() => {
        resizeBottomBackground();

        window.addEventListener("resize", resizeBottomBackground);
        return () => {
            window.removeEventListener("resize", resizeBottomBackground);
        };
    });

    const style: React.CSSProperties = {};
    if (backgroundImage) {
        style.backgroundImage = `url(${backgroundImage})`;
    }

    return (
        <>
            {topVariant && <div className={cx("top-background", "top-background-" + topVariant)} style={style} />}
            {mainBackgroundStyle && <div className={mainBackgroundStyle}></div>}
            {bottomVariant && (
                <div className={cx("bottom-background", "bottom-background-" + bottomVariant)} ref={bottomBackgroundRef} />
            )}
        </>
    );
};

export default Background;
