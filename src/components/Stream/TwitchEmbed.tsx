const host = process.env.HOST || 'localhost';

interface EmbedProps {
	channel: string;
	width?: string;
	height?: string;
}

export default function TwitchEmbed({
	width = '100%',
	height = '100%',
}: EmbedProps) {
	return (
		<div id='twitch'>
			<iframe
				src={encodeURI(
					'https://player.twitch.tv/?channel=jamesinaxx&parent=' +
						host
				)}
				allowFullScreen
				width={width}
				height={height}
			></iframe>
		</div>
	);
}
