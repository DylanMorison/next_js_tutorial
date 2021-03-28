import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" keywords="ninja" />
			</Head>
			<div>
				<h1 className={styles.title}> Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugiat voluptas,
					facere enim sit molestias qui neque tempora nihil doloremque. Porro ex dolorem
					culpa. Architecto iusto excepturi similique aliquam distinctio!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugiat voluptas,
					facere enim sit molestias qui neque tempora nihil doloremque. Porro ex dolorem
					culpa. Architecto iusto excepturi similique aliquam distinctio!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
