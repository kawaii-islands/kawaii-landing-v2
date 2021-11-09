import React from "react";
import cn from "classnames/bind";
import styles from "./Advisor.module.scss";
import linkedin from "/public/images/images/team-linkedin.png";
import chungdao from "/public/images/images/chung-dao.png";
import circle from "/public/images/images/team-circle.png";
import laurel from "/public/images/images/team-laurel.png";

const cx = cn.bind(styles);
const member = [
    {
        name: "Chung Dao",
        linkedin: "https://www.linkedin.com/in/chung-dao/",
        role: "Cofounding Advisor",
        image: "chung-dao",
        bios: [
            {
                role: "CEO & Co-founder Oraichain",
                link: "https://orai.io/",
            },
            {
                role: "Ph.D. from The University of Tokyo",
            },
        ],
    },
];

const Advisor: React.FC<{}> = ({}) => {
    return (
        <div className={cx("advisor")}>
            <div className={cx("title")}>Meet Our Advisor</div>
            <div className={cx("group")}>
                {member.slice(0, 3).map((item) => (
                    <div className={cx("mem")} key={item.name}>
                        <div className={cx("circle")}>
                            <img src={`/images/images/${item.image}.png`} className={cx("avatar")} />
                            <img src={'/images/images/team-circle.png'} className={cx("border")} />
                            <a href={item.linkedin} target="_blank" rel="noreferrer">
                                <img src={'/images/images/team-linkedin.png'} className={cx("linkedin")} />
                            </a>
                            <img src={'/images/images/team-laurel.png'} className={cx("laurel")} />
                        </div>
                        <div className={cx("name")}>{item.name}</div>
                        <div className={cx("role")}>{item.role}</div>
                        {item.bios.map((bio: any, idx: number) => {
                            if (bio.link) {
                                return (
                                    <div className={cx("role")} key={idx}>
                                        <a href={bio.link} target="_blank" rel="noreferrer">
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
            </div>
        </div>
    );
};

export default Advisor;
