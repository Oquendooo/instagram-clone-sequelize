import Sequelize from 'sequelize';

let sequelize;

if(process.env.NODE_ENV === 'development'){
  sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    dialect: process.env.DATABASE_PROTOCOL,
    host: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    schema: process.env.DATABASE_SCHEMA,
    // logging: false
  });
}else{
  sequelize = new Sequelize(process.env.DATABASE_URL);
}

export default sequelize;