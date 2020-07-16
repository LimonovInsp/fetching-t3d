import React, {useState} from 'react';
import { fetchData } from './api';
import { Material } from './interfaces';
import { MaterialsList } from './components/MaterialsList/MaterialsList';
import { MaterialsButtons } from './components/MaterialsButtons/MaterialsButtons';
import "./App.css";

const App: React.FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleButtonLoad = async () => {
    await fetchData().then(({ materialsList }) => setMaterials(materialsList));
  };

  const handleButtonShow = () => {
    if(materials.length) {
      setIsLoaded(true);
    }
  }

  const handleButtonClear = () => setMaterials([]);

  return (
    <div className="App">
      <MaterialsButtons
        handleButtonLoad={handleButtonLoad}
        handleButtonShow={handleButtonShow}
        handleButtonClear={handleButtonClear}
        isLoaded={isLoaded}
      />
      {isLoaded
      ? <MaterialsList materials={materials} /> 
      : ''}
    </div>
  );
}

export default App;
