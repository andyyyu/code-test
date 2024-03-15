import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchArtworkList } from "./API";
import { ArtWork } from "./components/ArtWork";

function Home() {
	const page = 2;
	const arkworks = useQuery({
		queryKey: ["artWorks", page],
		queryFn: () => fetchArtworkList(page),
	});

	return (
		<div className="App">
			{arkworks.data?.list.map(({ id, title, thumbnail }) => (
				<ArtWork thumbnail={thumbnail} title={title} id={id} />
			))}
			<ArtWork thumbnail="sdf" id={1} title="test" />
		</div>
	);
}

export default Home;
