import express from 'express';
import router from './src/router.js';

const app = express();
app.use(express.json());

// Utiliza el archivo router.js para configurar todas las rutas
app.use('/api', router);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

