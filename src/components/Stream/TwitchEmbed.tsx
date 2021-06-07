import { useEffect } from 'react';

interface EmbedProps {
	channel: string;
}

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

export default function TwitchEmbed({ channel }: EmbedProps) {
	useEffect(() => {
		let embed;
		const script = document.createElement('script');
		script.setAttribute('src', EMBED_URL);
		script.addEventListener('load', () => {
			embed = new window.Twitch.Embed('twitch-embed', {
				width: '100%',
				height: '325',
				channel: channel,
			});
		});
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return <div id='twitch-embed'></div>;
}
