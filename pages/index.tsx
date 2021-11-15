//@ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/common/Header/Header";
import Landing from "../components/Landing/Landing";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Home: NextPage = () => {
    useEffect(() => {
        (function (m, a, i, l, e, r) {
            m["MailerLiteObject"] = e;
            function f() {
                var c = { a: arguments, q: [] };
                var r = this.push(c);
                return "number" != typeof r ? r : f.bind(c.q);
            }
            f.q = f.q || [];
            m[e] = m[e] || f.bind(f.q);
            m[e].q = m[e].q || f.q;
            r = a.createElement(i);
            var _ = a.getElementsByTagName(i)[0];
            r.async = 1;
            r.src = l + "?v" + ~~(new Date().getTime() / 1000000);
            _.parentNode.insertBefore(r, _);
        })(
            window,
            document,
            "script",
            "https://static.mailerlite.com/js/universal.js",
            "ml"
        );

        var ml_account = ml("accounts", "3363229", "y4l0u0e1x1", "load");
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Kawaii islands | An Anime Metaverse</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <Header />
            <main className={styles.main}>
                <Landing />
            </main>
        </div>
    );
};

export default Home;
