import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";
// import image from "../public/Images/answer"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [yes, setYes] = useState("");
  const [ofcose, setOfcose] = useState("");

  if (yes != "" && ofcose != "") {
    setTimeout(() => {
      alert("Develop by MD.Kamrul Hasan");
    }, 1000);
  }
  return (
    <>
      <Head>
        <title>Just Love</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/Images/love.png" />
      </Head>
      <main className={styles.bg}>
        {yes == "" && ofcose == "" ? (
          <section className={styles.main}>
            <h1>Will You Marry Me? 🌹</h1>
            <div className={styles.btns}>
              <button
                onClick={() => {
                  setYes("yes");
                }}
                className={styles.btn}
              >
                YES 🥰
              </button>
              <button
                onClick={() => {
                  setOfcose("ofCose");
                }}
                className={styles.btn}
              >
                OF COUESE! YES 😘
              </button>
            </div>
          </section>
        ) : (
          ""
        )}

        {yes != "" || ofcose != "" ? (
          <section>
            <h5 className={styles.answer}>I LOVE YOU...♥️♥️♥️</h5>
            <br />
            <img
              src="https://media.tenor.com/604bqFxbFTAAAAAi/love.gif"
              alt="answer"
            />
          </section>
        ) : (
          ""
        )}
        <hr />
        <footer className={styles.footer}>
          <small>MD.Kamrul Hasan</small>
          <a
            href="https://www.facebook.com/Kamrul.h.m.77/"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </footer>
      </main>
    </>
  );
}
