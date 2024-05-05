import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://credible-jackal-36298.upstash.io',
  token: 'AY3KAAIncDFlM2Q3N2IxYmVkMjU0MmJlYTRhMzBlZjk2MzRlNjllOXAxMzYyOTg',
})

const data = await redis.set('foo', 'bar');