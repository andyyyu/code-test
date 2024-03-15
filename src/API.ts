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

// doc for elastic search
// https://www.elastic.co/guide/en/elasticsearch/reference/5.1/search-request-from-size.html#search-request-from-size
// size <=> limit, from <=> offset

export const fetchArtworkList = async (page: number, title: string) => {
	const request = {
		q: title,
		size: 10,
		from: (page - 1) * 10,
		// note: I can't finish this
		// query: { match_all: {boost: 1.0} },

	};

	const response = await fetch(
		"https://api.artic.edu/api/v1/artworks/search",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request)
		}
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

export const fetchArtwork = async (id: string) => {
	const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
	return response
}
