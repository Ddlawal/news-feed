export interface ArticlesI {
	source: {
		id: string
		name: string
	}
	author: string
	title: string
	url: string
	urlToImage: string
	likes: number
}

export interface ArticleListItemI {
	article: ArticlesI
}

export interface BannerI {
	article: ArticlesI
}

export interface FavouriteIconI {
	liked?: boolean
	like?: () => void
	unlike?: () => void
	color: string
	size?: 'small' | 'medium' | 'default' | 'large'
}

export interface PrimaryButtonI {
	onClick: () => void
	btnText: string
}
