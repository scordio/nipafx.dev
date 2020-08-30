import React from "react"
import RehypeReact from "rehype-react"

import { classNames } from "../infra/functions"

import { H1, H2, H3, H4, H5, H6 } from "../components/headings"
import Admonition from "../components/admonition"
import ContentImage from "../components/contentImage"
import ContentVideo from "../components/contentVideo"
import Link from "../components/link"
import { PullQuote, BlockQuote } from "../components/quote"
import SeriesList from "../components/seriesList"
import Table from "../components/table"

import layout from "../layout/container.module.css"

const RenderHtml = ({ withAst, htmlAst }) => {
	const renderAst = new RehypeReact({
		// this is needed to prevent Rehype from creating a <div> around
		// the rendered Markdown (which screws up the grid layout);
		// more: https://github.com/rehypejs/rehype-react/issues/9
		Fragment: React.Fragment,
		createElement: React.createElement,
		components: {
			h1: H1,
			h2: H2,
			h3: H3,
			h4: H4,
			h5: H5,
			h6: H6,
			a: renderLink,
			admonition: Admonition,
			blockquote: BlockQuote,
			contentimage: ContentImage,
			contentvideo: ContentVideo,
			// div: it would be great to intercept div (e.g. to add `layout.offWide` to `.gatsby-highlight` divs),
			//      but this seems to override `Fragment: React.Fragment` (details above)
			ol: renderOrderedList,
			pullquote: PullQuote,
			"series-list": SeriesList,
			table: Table,
			ul: renderUnorderedList,
		},
	}).Compiler

	return renderAst(withAst ? withAst.htmlAst : htmlAst)
}

const renderLink = ({ href, children }) => {
	return <Link to={href} children={children} />
}

const renderOrderedList = ({ id, className, children }) => {
	return (
		<ol id={id} {...classNames(className, layout.offCenter)}>
			{children}
		</ol>
	)
}

const renderUnorderedList = ({ id, className, children }) => {
	return (
		<ul id={id} {...classNames(className, layout.offCenter)}>
			{children}
		</ul>
	)
}

export default RenderHtml
