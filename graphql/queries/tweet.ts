import { graphql } from "@/gql";

export const getSignedURLForTweetQuery = graphql(`
  #graphql

  query GetSignedURL($imageName: String!, $imageType: String!) {
    getPresignedUrl(imageName: $imageName, imageType: $imageType)
  }
`);

export const getAllTweetsQuery = graphql(`
  #graphql
  query GetAllTweets {
    getAllTweets {
      content
      id
      author {
        id
        lastName
        profileImageUrl
        email
        firstName
      }
      imageUrl
    }
  }
`);
