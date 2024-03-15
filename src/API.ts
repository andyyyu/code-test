// simplify version of response type
interface FetchArtworkListResponse {
	data: Array<{
		id: number;
		title: string;
		thumbnail: {
			lqip: string;
		};
	}>;
	pagination: { total: number };
}

export const fetchArtworkList = async (page: number) => {
	const response = await fetch(
		`https://api.artic.edu/api/v1/artworks?${page}=1&limit=10`
	);
	const result: FetchArtworkListResponse = await response.json();
	return {
		list: result.data.map((data) => ({
			id: data.id,
			title: data.title,
			thumbnail: data.thumbnail.lqip,
		})),
		totalPage: result.pagination.total,
	};
};
