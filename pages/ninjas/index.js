import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: {
			ninjas: data
		}
	};
};

const Ninjas = (props) => {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" keywords="ninja" />
			</Head>
			<div>
				<h1>All Ninjas</h1>
				{props.ninjas.map((ninja) => (
					<Link href={`/ninjas/` + ninja.id} key={ninja.id}>
						<a className={styles.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Ninjas;
