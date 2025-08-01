export default async function handler(req, res) {
  const BEARER = process.env.TWITTER_BEARER_TOKEN

  const response = await fetch(
    `https://api.twitter.com/2/tweets/counts/recent?query=gmira`,
    { headers: { Authorization: `Bearer ${BEARER}` } }
  )

  const data = await response.json()
  const count = data.meta?.total_tweet_count ?? 0
  res.status(200).json({ count })
}
