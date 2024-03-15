import { useNavigate, useParams } from "react-router-dom";
import { fetchArtwork } from "../API";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function Detail() {
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			navigate("/1");
		}
	}, [id, navigate]);

	const arkworks = useQuery({
		queryKey: ["artwork", id],
		queryFn: () => fetchArtwork(id as string),
		// data caching for 15s
		staleTime: 15000,
		// not throwing error by default
		throwOnError: true,
	});

	return <div>{JSON.stringify(arkworks, null, 4)}</div>;
}
