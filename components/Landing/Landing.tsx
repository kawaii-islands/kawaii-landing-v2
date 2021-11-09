import React from "react";
import cn from "classnames/bind";
import styles from "./Landing.module.scss";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import Advisor from "./Advisor/Advisor";
import Partner from "./Partner/Partner";
import Countdown from "../Countdown/Countdown";

const cx = cn.bind(styles);

const Landing: React.FC<{}> = ({ }) => {
    return (
        <div className={cx("landing")}>
            <Countdown />
            <Banner />
            <Feature />
            <Roadmap />
            <Team />
            <Advisor />
            <Partner />
        </div>
    );
};

export default Landing;
