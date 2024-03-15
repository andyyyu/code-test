// simplify version of response type
// thumbnail could be null in some cases
interface FetchArtworkListResponse {
	data: Array<{
		id: number;
		title: string;
		thumbnail?: {
			lqip: string;
		};
	}>;
	pagination: { total_pages: number };
}

export const fetchArtworkList = async (page: number, title: string) => {

	const response = await fetch(
		`https://api.artic.edu/api/v1/artworks/search?page=${page}&limit=10&q=${title}`
	);
	const result: FetchArtworkListResponse = await response.json();
	return {
		list: result.data.map((data) => ({
			id: data.id,
			title: data.title,
			thumbnail: data.thumbnail?.lqip,
		})),
		totalPage: result.pagination.total_pages,
	};
};
