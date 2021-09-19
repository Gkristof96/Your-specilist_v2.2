import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import providers from './data/provider.js'
import Provider from './models/providerModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Provider.deleteMany()
        const createdUsers = await User.insertMany(users)

        const providerDatas = providers.map((provider,index) => {
          return {...provider, user: createdUsers[index]._id}
        })
        await Provider.insertMany(providerDatas)
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch(error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
      await User.deleteMany()
      await Provider.deleteMany()
  
      console.log('Data Destroyed!'.red.inverse)
      process.exit()
    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
  }
  
  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }
