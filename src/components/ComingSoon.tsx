import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function ComingSoon({ date }: { date?: string }) {
	return (
		<div className='bgimg'>
			<div className='middle'>
				<h1>COMING SOON</h1>
				<hr />
				<p>{date || 'Date is also coming soon... Maybe'}</p>
			</div>
			<div className='bottomleft'>
				<a className='goBack' href='/'>
					<p>{<FontAwesomeIcon icon={faBackward} />} Go Back</p>
				</a>
			</div>
			<style jsx>{`
				* {
					user-select: none;
				}

				.goBack {
					cursor: pointer;
					color: #000;
				}

				body,
				html {
					height: 100%;
					background: #000;
				}

				/* Position text in the top-left corner */
				.topleft {
					position: absolute;
					top: 0;
					left: 16px;
				}

				/* Position text in the bottom-left corner */
				.bottomleft {
					position: absolute;
					bottom: 0;
					left: 16px;
				}

				/* Position text in the middle */
				.middle {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					text-align: center;
				}

				/* Style the <hr> element */
				hr {
					margin: auto;
					width: 40%;
				}
			`}</style>
		</div>
	);
}
