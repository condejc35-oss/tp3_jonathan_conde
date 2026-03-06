import express from 'express';


//crear una instancia de express
const app = express();
const PORT = 3000;


//Ruta GET con parámetro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del ususario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});




app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
