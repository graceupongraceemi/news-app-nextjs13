import { gql } from 'graphql-request';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //  GraphQL query
  const query = gql`
    query MyQuery {
      myQuery(access_key: '7c159e25ac6de95956c14e0385cd33b2') {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }    
  `;
  // Fetch function with Next.js 13 caching...
  // Sort function by images vs not images present
  //  return res
};

export default fetchNews;

// Example Import
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=abc"
