import { Card, Image,Text } from "@mantine/core";

interface ArtWorkProps {
	id: number;
	title: string;
	thumbnail: string;
}

export const ArtWork = ({ title, thumbnail }: ArtWorkProps) => {
	return (
		<Card  shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image src={thumbnail} height={140} />
				<Text fw={500}>{title}</Text>
			</Card.Section>
		</Card>
	);
};
