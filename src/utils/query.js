import { gql } from "apollo-boost";

export const more_query = gql
`
query MyQuery($first: Int) {
  posts(where: { tag: "featured" }, first: $first) {
    edges {
      node {
        title
        slug
        excerpt
        featuredImages {
          featuredImages {
            mediaItemUrl
          }
        }
        link
      }
    }
  }
}
`;