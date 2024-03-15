import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchArtworkList } from "../API";
import { ArtWork } from "../components/ArtWork";
import { Button, Flex, Input, Loader, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Home() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { pageParam } = useParams();

	useEffect(() => {
		if (!pageParam || pageParam === "0") {
			navigate("/1");
		}
	}, [pageParam, navigate]);

	const [page, onPageChange] = useState(Number(pageParam));
	const [title, onTitleChange] = useState("");

	const arkworks = useQuery({
		queryKey: ["artworks", page],
		queryFn: () => fetchArtworkList(page, title),
		// data caching for 15s
		staleTime: 15000,
		// not throwing error by default
		throwOnError: true,
	});

	const invalidateQueries = () =>
		queryClient.invalidateQueries({ queryKey: ["artworks"] });

	return (
		<div className="App">
			<Input
				value={title}
				onChange={(e) => onTitleChange(e.currentTarget.value)}
				placeholder="search here"
			/>
			<Button onClick={invalidateQueries}>Search</Button>
			{arkworks.isFetching ? (
				<Loader color="blue" />
			) : (
				<Flex wrap="wrap" gap="md">
					{arkworks.data?.list.map(({ id, title, thumbnail }) => (
						<ArtWork
							onClick={() => navigate(`/detail/${id}`)}
							key={id}
							thumbnail={thumbnail}
							title={title}
							id={id}
						/>
					))}
				</Flex>
			)}
			<Pagination
				total={arkworks.data?.totalPage || 1}
				value={page}
				onChange={(page) => {
					onPageChange(page);
					navigate(`/${page}`);
				}}
			/>
		</div>
	);
}
