import * as dotenv from 'dotenv'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

const dotenvRes = dotenv.config()

if (dotenvRes.error) {
	throw dotenvRes.error
}

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
						integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
						crossOrigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.min.css"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
