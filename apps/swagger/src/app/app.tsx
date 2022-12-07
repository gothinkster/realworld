import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerDocument from '../assets/swagger.json';

export const App = () => <SwaggerUI spec={swaggerDocument} />;

export default App;
