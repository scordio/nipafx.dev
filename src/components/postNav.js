import React from "react"

import { classNames } from "../infra/functions"

import Link from "./link"
import Nav from "./nav"
import Toc from "./toc"

import MarkdownAsHtml from "../infra/markdownAsHtml"

import style from "./postNav.module.css"

const PostNav = ({ title, repo, toc }) => {
	if (!toc && !repo) return null

	return (
		<Nav title={title} headers={["table of contents", "source code"]}>
			{toc && <Toc toc={toc} />}
			{repo && showRepo(repo)}
		</Nav>
	)
}

const showRepo = repo => (
	<p className={style.repo}>
		Want to play around with the code yourself? Check out{" "}
		<Link to={repo.url}>{repo.title}</Link>,{" "}
		<MarkdownAsHtml>{lowercaseFirstLetter(repo.description)}</MarkdownAsHtml> - it contains many of the
		snippets shown here.
	</p>
)

const lowercaseFirstLetter = string => string.charAt(0).toLowerCase() + string.substring(1)

export default PostNav
