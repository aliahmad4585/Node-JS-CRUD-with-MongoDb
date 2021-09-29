const mongoos = require('mongoose')

const connection = async()=>{

    try {
        const conn = await mongoos.connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology:true
        })

        console.log(`MongoDb Connect ${conn.connection}`)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
     
}

module.exports = connection;