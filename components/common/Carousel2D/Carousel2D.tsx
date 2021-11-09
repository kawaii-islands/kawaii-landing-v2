import React, { useEffect } from "react";
import cn from "classnames/bind";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import styles from "./Carousel2D.module.scss";

const cx = cn.bind(styles);

const responsive = {
    tablet: {
        breakpoint: { max: 1199, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
};

const Carousel2D: React.FC<{ list: any[] }> = ({ list }) => {
    const parser = new UAParser();
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";

    useEffect(() => {
        const userAgent = navigator.userAgent;
        parser.setUA(userAgent);
    }, []);

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
            {list.map((item) => (
                <div className={cx("carousel-item")} key={item.name}>
                    <div className={cx("circle")}>
                        <img
                            src={`/images/images/${item.image}.png`}
                            className={cx("avatar")}
                        />
                        <img src={"/images/images/team-laurel.png"} className={cx("border")} />
                        <a href={item.linkedin} target="_blank">
                            <img src={"/images/images/team-linkedin.png"} className={cx("linkedin")} />
                        </a>
                        <img src={"/images/images/team-laurel.png"} className={cx("laurel")} />
                    </div>
                    <div className={cx("name")}>{item.name}</div>
                    <div className={cx("role")}>{item.role}</div>

                    {item.bios.map((bio: any, idx: number) => {
                        if (bio.link) {
                            return (
                                <div className={cx("role")} key={idx}>
                                    <a href={bio.link} target="_blank">
                                        {bio.role}
                                    </a>
                                </div>
                            );
                        }
                        return (
                            <div className={cx("role")} key={idx}>
                                {bio.role}
                            </div>
                        );
                    })}
                </div>
            ))}
        </Carousel>
    );
};

export default Carousel2D;
