import { Card, Image, Text } from "@mantine/core";

interface ArtWorkProps {
	id: number;
	title: string;
	thumbnail?: string;
}

export const ArtWork = ({ title, thumbnail }: ArtWorkProps) => {
	return (
		<Card w={250} h={280} shadow="sm" padding="lg" radius="md" withBorder>
			<Image src={thumbnail} height={100} />
			<Text lineClamp={3} fw={500}>
				{title}
			</Text>
		</Card>
	);
};
