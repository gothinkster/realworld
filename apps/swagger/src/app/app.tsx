import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import swaggerDocument from '../assets/swagger.json';

export function App() {
  return (
    <>
      <SwaggerUI spec={swaggerDocument} />
    </>
  );
}

export default App;
