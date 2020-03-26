export default class SearchResult {
  count: number;
  offset: number;
  results: [Tweets];
}

class Tweets {
  account: {
    fullname: string,
    href: string;
    id: number
  };
  date: string;
  hashtags: [string];
  likes: number;
  replies: number;
  retweets: number;
  text: string
}