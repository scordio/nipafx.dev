import React from "react"

import RenderHtml from "../infra/renderHtml"
import { className } from "../infra/functions"

import PostNav from "../components/postNav"

import layout from "../layout/container.module.css"

const PostContent = ({ title, repo, toc, htmlAst }) => {
	return (
		<article {...className(layout.container, layout.textContainer)}>
			<PostNav {...{ title, repo, toc }} />
			<RenderHtml htmlAst={htmlAst}/>
		</article>
	)
}

export default PostContent
