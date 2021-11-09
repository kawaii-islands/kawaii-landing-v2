//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import styles from "./Countdown.module.scss";
// import "./Countdown.scss";
import cn from "classnames/bind";
import { Modal } from "react-bootstrap";
import useWindowDimensions from "../common/WindowDimensions/WindowDimensions";
// import im from "../../public/images/images"

const cx = cn.bind(styles);
const END_TIME = "Tue Oct 12 2021 20:00:00 GMT+0700 (Indochina Time)";

const twoDigitNum = (x: number) => {
    if (x < 10) return `0${x}`;
    else return x.toString();
};
const formatTime = (milliseconds: number) => {
    let hours = twoDigitNum(Math.floor((milliseconds % 86400000) / 3600000));
    let minutes = twoDigitNum(Math.floor((milliseconds % 3600000) / 60000));
    let seconds = twoDigitNum(Math.floor((milliseconds % 60000) / 1000));
    return [hours, minutes, seconds];
};

const Countdown: React.FC<{}> = ({}) => {
    const isEnd = new Date(END_TIME) - Date.now() <= 0;
    const [show, setShow] = useState(!isEnd);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const { width } = useWindowDimensions();
    let interval = useRef();

    useEffect(() => {
        if (new Date(END_TIME) - Date.now() > 0) {
            const [hours, minutes, seconds] = formatTime(
                new Date(END_TIME) - Date.now()
            );
            setTime({
                hours,
                minutes,
                seconds,
            });
        } else {
            clearInterval(interval.current);
            setShow(false);
        }
    }, [count]);

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount((count) => ++count);
        }, 1000);
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <Modal
            dialogClassName={cx("countdown")}
            centered
            show={show}
            animation={true}
            onHide={() => {
                clearInterval(interval.current);
                setShow(false);
            }}
        >
            <Modal.Body>
                <div className={cx("container")}>
                    <div
                        className={cx("close-icon")}
                        onClick={() => {
                            clearInterval(interval.current);
                            setShow(false);
                        }}
                    >
                        <div className={cx("mdiv")}>
                            <div className={cx("md")}></div>
                        </div>
                    </div>
                    <img
                        className={cx("bg")}
                        src={`../../public/images/images/${width > 768 ? "countdown" : "countdown-mobile"}.png`}
                    />
                    <div className={cx("time")}>
                        <div className={cx("title")}>
                            <div>HOURS</div>
                            <div>MINUTES</div>
                            <div>SECONDS</div>
                        </div>
                        <div className={cx("bottom")}>
                            <div className={cx("number")}>{time.hours}</div>
                            <div>:</div>
                            <div className={cx("number")}>{time.minutes}</div>
                            <div>:</div>
                            <div className={cx("number")}>{time.seconds}</div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Countdown;
