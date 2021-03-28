import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();
	const [countDown, setCountDown] = useState(3);

	useEffect(() => {
		setTimeout(() => {
			setCountDown(countDown - 1);
		}, 1000);
	}, [countDown]);

	if (countDown === 0) {
		router.push("/");
	}

	return (
		<div className="not-found">
			<h1>Oops...</h1>
			<h2>That page cannot be found.</h2>
			<p>Redirecting you in {countDown}...</p>
		</div>
	);
};

export default NotFound;
