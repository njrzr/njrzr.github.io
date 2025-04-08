import { MongoClient, ServerApiVersion } from 'mongodb'

export default defineEventHandler(async (event) => {
  const uri = `mongodb+srv://${process.env.VITE_USER_SECRET}:${process.env.VITE_PASS_SECRET}@developmentdb.g1e4gym.mongodb.net/?appName=DevelopmentDB`

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  await client.connect()
  const db = client.db("zeropluswebsite")
  const data = await db.collection('cv_data').find({}).toArray()
  await client.close()
  return data[0].curriculum
})