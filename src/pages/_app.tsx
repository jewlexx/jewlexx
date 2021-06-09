import '../styles/global.scss';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
	dayjs.extend(advancedFormat);
	dayjs.extend(localizedFormat);

	return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	);
}
