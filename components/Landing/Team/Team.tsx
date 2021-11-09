import React from "react";
import cn from "classnames/bind";
import styles from "./Team.module.scss";
import Carousel2D from "../../common/Carousel2D/Carousel2D";

const cx = cn.bind(styles);
const member = [
    {
        name: "Minh Do",
        linkedin: "https://www.linkedin.com/in/dotuanminh",
        role: "CEO",
        image: "minh-do",
        bios: [
            {
                role: "CEO & Co-founder at Imba",
                link: "https://imba.co/",
            },
            {
                role: "Co-founder at Suga Group",
                link: "https://thesugagroup.com/",
            },
        ],
    },
    {
        name: "Thang Nguyen",
        linkedin: "https://www.linkedin.com/in/nguyen-quang-thang/",
        role: "CTO",
        image: "thang-nguyen",
        bios: [
            {
                role: "yAI.Finance Lead at Oraichain",
                link: "https://orai.io/",
            },
        ],
    },
    {
        name: "Minh Huynh",
        linkedin: "https://www.linkedin.com/in/huynh-tri-minh-75523b219/",
        role: "Tech Lead",
        image: "minh-huynh",
        bios: [
            {
                role: "Technical Manager at Imba",
                link: "https://imba.co/",
            },
            {
                role: "Shareholder at Suga Group",
                link: "https://thesugagroup.com/",
            },
        ],
    },
    {
        name: "Reishi Tran",
        linkedin: "https://www.linkedin.com/in/reishi-tran/",
        role: "Lead Game Designer",
        image: "reishi-tran",
        bios: [
            {
                role: "2D Art Manager & Game Designer at Imba",
                link: "https://imba.co/",
            },
        ],
    },
    {
        name: "Duong Nguyen",
        linkedin: "https://www.linkedin.com/in/nguyen-tung-duong/",
        role: "Blockchain Tech Lead",
        image: "duong-nguyen",
        bios: [
            {
                role: "Web3 Developer at Oraichain",
                link: "https://orai.io/",
            },
        ],
    },
    {
        name: "Ha Khong",
        linkedin: "https://www.linkedin.com/in/hakm1/",
        role: "Head of Business Development",
        image: "ha-khong",
        bios: [
            {
                role: "M.S. from National University of Singapore",
            },
        ],
    },
];

const Team: React.FC<{}> = ({ }) => {
    return (
        <div className={cx("team")}>
            <div className={cx("title")}>Meet Our Team</div>
            <div className={cx("group")} style={{ marginBottom: 124 }}>
                {member.slice(0, 3).map((item) => (
                    <div className={cx("mem")} key={item.name}>
                        <div className={cx("circle")}>
                            <img
                                src={`/images/images/${item.image}.png`}
                                className={cx("avatar")}
                            />
                            <img src={'/images/images/team-circle.png'} className={cx('border')} />
                            <a href={item.linkedin} target="_blank" rel="noreferrer">
                                <img
                                    src={'/images/images/team-linkedin.png'}
                                    className={cx("linkedin")}
                                />
                            </a>
                            <img src={'/images/images/team-laurel.png'} className={cx('laurel')} />
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
            </div>
            <div className={cx("group")}>
                {member.slice(3).map((item) => (
                    <div className={cx("mem")} key={item.name}>
                        <div className={cx("circle")}>
                            <img
                                src={`/images/images/${item.image}.png`}
                                className={cx("avatar")}
                            />
                            <img src={'/images/images/team-circle.png'} className={cx('border')} />
                            <a href={item.linkedin} target="_blank">
                                <img
                                    src={'/images/images/team-linkedin.png'}
                                    className={cx("linkedin")}
                                />
                            </a>
                            <img src={'/images/images/team-laurel.png'} className={cx('laurel')} />
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
            </div>
            <div className={cx("carousel")}>
                <Carousel2D list={member} />
            </div>
        </div>
    );
};

export default Team;
