const express = require('express');
const app = express();
// USA ARCHIVOS ESTÁTICOS  Y SE MUESTRAN AL LLAMAR A LA RUTA "/"
app.use('/', express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), ()=> {
  console.log('Node app is running on port', app.get('port'));
});
