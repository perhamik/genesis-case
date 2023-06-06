import type {ComponentProps} from './types'

export const Container = ({children}: ComponentProps) => {
	return <div className="container">{children}</div>
}
