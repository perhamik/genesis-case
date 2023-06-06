import {Card} from '@perhamik/react-components'

import {getPreviewWebp} from '@/src/shared/lib'

export const ItemImage = ({url}: {url: string}) => {
	return (
		<Card.Img
			variant="top"
			src={getPreviewWebp(url)}
			width={512}
			height={512}
			style={{minHeight: '128px', maxHeight: '164px', objectFit: 'cover', width: 'auto', height: '100%'}}
		/>
	)
}
