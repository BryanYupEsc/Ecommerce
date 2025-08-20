require('dotenv').config();
const serverApp = require('./serverapp');// llama al servidor que esta en server app
const sequelize = require('./config/database');

const cors = require('cors');
/// importando la base d edatos------------------------------------------
const {Product} = require('./models/index')


serverApp.use(cors());

const PORT = process.env.PORT || 3001;

serverApp.listen(PORT, async () =>{
    try {
        await sequelize.authenticate();
        console.log('conectado a la base de datos');
        await sequelize.sync({alter: true});// esto crea la tabla
    } catch (error) {
        console.error('erro al conectar DB');
    }

    console.log(`servidor corriendo en http://localhost:${PORT}`);
    
})