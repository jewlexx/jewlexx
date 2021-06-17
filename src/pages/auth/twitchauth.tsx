import { Component } from 'react';

export default class TwitchAuth extends Component<
	{ clientId: string; redirectUrl: string },
	{ urlParams: any; authUrl: URL; chromium: boolean }
> {
	constructor(props) {
		super(props);

		this.state = {
			urlParams: {},
			authUrl: null,
			chromium: true,
		};
	}

	wait(time: number) {
		const timeNow = new Date().getTime();
		let timePast = timeNow;
		time = timeNow + time;
		while (timePast >= time) {
			return;
		}
	}

	componentDidMount() {
		const authUrl = new URL('https://id.twitch.tv/oauth2/authorize');

		const hash = window.location.hash.substr(1);

		const result = hash.split('&').reduce(function (res, item) {
			var parts = item.split('=');
			res[parts[0]] = parts[1];
			return res;
		}, {});

		this.setState({ urlParams: result });

		const redirect_uri = this.props.redirectUrl + '/auth/twitchauth';

		authUrl.searchParams.append('client_id', this.props.clientId);
		authUrl.searchParams.append('redirect_uri', redirect_uri);
		authUrl.searchParams.append('response_type', 'token');
		authUrl.searchParams.append('scope', 'user:read:follows');

		this.setState({ authUrl, chromium: !!window.chrome });
	}

	render() {
		if (!this.state.chromium)
			return (
				<div>
					You cannot use this chromium extension without a chromium
					browser... so why are you here?
				</div>
			);

		const TwitchIcon = () => (
			<img
				src='/images/TwitchGlitchPurple.svg'
				width='1em'
				height='1em'
			></img>
		);

		const Button = () => (
			<div className='twitchLogin'>
				{this.state.urlParams.access_token === undefined ? (
					<p>
						Click here to{' '}
						<button
							onClick={() =>
								window.open(this.state.authUrl.href, '_self')
							}
						>
							Login with Twitch{' '}
							<i>
								<TwitchIcon />
							</i>
						</button>
					</p>
				) : (
					<>
						<p>
							Thank you for authorizing with Twitch! Copy and
							paste{' '}
							<i
								id='twitchToken'
								className='codeText'
								onClick={() => {
									console.log('Yes');
									navigator.clipboard.writeText(
										this.state.urlParams.access_token
									);

									document.getElementById(
										'copied'
									).style.opacity = '100';
									setTimeout(() => {
										document.getElementById(
											'copied'
										).style.opacity = '0';
									}, 2000);
								}}
							>
								{this.state.urlParams.access_token}
							</i>{' '}
							into the <i>token</i> box to complete authorization
						</p>
						<small style={{ opacity: '0' }} id='copied'>
							Copied to clipboard
						</small>
					</>
				)}
			</div>
		);

		return (
			<>
				<style jsx global>{`
					body {
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
}

export async function getStaticProps() {
	return {
		props: {
			clientId: process.env.TWITCHCLIENT,
			redirectUrl: process.env.REDIRECT_URL,
		},
	};
}
