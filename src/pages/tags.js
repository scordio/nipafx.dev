import React from "react"
import { graphql } from "gatsby"

import Site from "../layout/site"
import PostHeader from "../components/postHeader"
import Tag from "../components/tag"

import layout from "../layout/container.module.css"

const TagsPage = ({ data }) => (
	<Site>
		<main>
			<section>
				{/* TODO. progress */}
				<PostHeader title={<Tag tag={"tags"} />} />
				<div className={layout.container}>
					<ul>
						{data.tags.group.map(tag => (
							<li key={tag.slug}>
								<Tag tag={tag.slug} link />
								<span>{` (${tag.count})`}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	</Site>
)

export const query = graphql`
	{
		tags: allPost {
			group(field: tags) {
				slug: fieldValue
				count: totalCount
			}
		}
	}
`

export default TagsPage
