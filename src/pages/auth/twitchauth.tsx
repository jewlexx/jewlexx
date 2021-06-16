import { useEffect, useState } from 'react';

export default function TwitchAuth({clientId, redirectUrl}) {
	let urlParams: URLSearchParams = null;

	useEffect(() => {
		const queryString = window.location.hash.replace('#', '?');
		urlParams = new URLSearchParams(queryString);
		const redirect_uri = redirectUrl + '/auth/twitchauth';

		authUrl.searchParams.append('client_id', clientId);
		authUrl.searchParams.append('redirect_uri', redirect_uri);
		authUrl.searchParams.append('response_type', 'token');
		authUrl.searchParams.append('scope', 'user:read:follows');
	});

	const authUrl = new URL('https://id.twitch.tv/oauth2/authorize');

	const TwitchIcon = () => (
		<img
			src='/images/TwitchGlitchPurple.svg'
			width='24px'
			height='24px'
		></img>
	);

	const Button = () => (
		<div className='twitchLogin'>
			{!(urlParams || { has: () => null }).has('access_token') ? (
				<p>
					Click here to{' '}
					<button onClick={() => window.open(authUrl.href, '_self')}>
						Login with Twitch{' '}
						<i>
							<TwitchIcon />
						</i>
					</button>
				</p>
			) : (
				<p>
					Thank you for authorizing with Twitch! Open the extension on
					this page to begin using it!
				</p>
			)}
		</div>
	);

	return (
		<>
			<style jsx global>{`
				body {
					font-family: 'Akaya Telivigala', cursive;
					background: #23272a;
					color: #fff;
					display: inline-block;
					margin: 0px auto;
					text-align: center;
				}

				.twitchLogin {
					-ms-transform: translate(-50%, -50%);
					transform: translate(-50%, -50%);
					transition: background-color 0.125s ease-in-out;
					transform-origin: center center;
					margin: 0;
					position: absolute;
					top: 50%;
					left: 50%;

					font-size: xx-large;
				}

				button {
					font-family: 'Roboto Mono', monospace;
					border-style: solid;
					font-size: xx-large;
					border-radius: 5px;
					border-color: #9146ff;
					background-color: #f0f0ff;
				}

				button:hover {
					background-color: #383f5a;
				}
			`}</style>
			<div>
				This is in pre-pre-pre-pre-pre production. If you are not
				jamesinaxx, don't use this...
				<Button />
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			clientId: process.env.TWITCHCLIENT,
            redirectUrl: process.env.REDICRECT_URL
		},
	};
}
