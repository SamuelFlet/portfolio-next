import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Card, Accordion } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import coding from "../public/coding.png";
import audio from "../public/audiophile.png";
import fountainpen from "../public/fountainpen.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home-Samuel Fletcher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/projects" passHref>
          Home
        </Link>
        <h1 className="display-1">Samuel Fletcher</h1>
        <p>
          I&apos;m Samuel Fletcher, a student currently studying at Ryerson
          University in Toronto, Ontario. Below you can find my interests, as
          well as my skills.
        </p>
        <div
          className="d-flex p-4 justify-content-evenly"
          style={{ width: "75%" }}
        >
          <Card className="bg-dark" style={{ width: "18rem" }}>
            <Image src={coding} className="img-fluid" alt="Card image" />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Whether its creating a new application or working on a
                preexisting one, I&apos;m happy to put in the work.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bg-dark" style={{ width: "18rem" }}>
            <Image src={audio} className="img-fluid" alt="Card image" />
            <Card.Body>
              <Card.Title>Audio Equipment</Card.Title>
              <Card.Text>
                I collect headphones! I&apos;m a big fan of premium audio
                equipment and quality.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-dark" style={{ width: "18rem" }}>
            <Image src={fountainpen} className="img-fluid" alt="Card image" />
            <Card.Body>
              <Card.Title>Fountain Pens</Card.Title>
              <Card.Text>
                I collect fountain pens! Writing in my spare time helps me
                relax, my writing is done with my growing collection of fountain
                pens.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5">
          <h3>Programming Languages</h3>
          <div className="d-flex p-4 justify-content-evenly">
            <div className="p-4">
              <Image
                src="/progLang/python.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/progLang/java.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/progLang/javascript.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/progLang/c.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/progLang/html.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
          </div>
          <h3>Technologies</h3>
          <div className="d-flex p-4 justify-content-evenly">
            <div className="p-4">
              <Image
                src="/tech/react.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/tech/django.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/tech/mysql.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/tech/node.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
            <div className="p-4">
              <Image
                src="/tech/vue.svg"
                alt="Python"
                width="128"
                height="128"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
