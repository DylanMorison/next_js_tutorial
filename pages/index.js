import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugiat voluptas,
				facere enim sit molestias qui neque tempora nihil doloremque. Porro ex dolorem
				culpa. Architecto iusto excepturi similique aliquam distinctio!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugiat voluptas,
				facere enim sit molestias qui neque tempora nihil doloremque. Porro ex dolorem
				culpa. Architecto iusto excepturi similique aliquam distinctio!
			</p>
			<Link href="/ninjas">
				<a>See Ninja Listing</a>
			</Link>
		</div>
	);
}
