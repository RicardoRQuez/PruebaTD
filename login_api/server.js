import sequelize from '../login_api/config/db.config.js'
import app from  "./app.js"


const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: false });
    let PORT = 4000;
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
      )
  } catch (error) {
  console.log("Ha ocurrido un error: ", error);
}
};

main();
