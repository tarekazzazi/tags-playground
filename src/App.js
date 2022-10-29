
import './App.css';
import Tags from './Tags.jsx';
function App() {
  const cats = ['buttons','clark','louis','siglo','naples','springboot'];

  const filterByIndex = cats.filter((element, index) => {
    return index < 2;
  });
  
  console.log(filterByIndex);
  
  
  return (
      <div>
        <ul>
          <li>
            {filterByIndex }
          </li>
        </ul>

        <Tags />
      </div>
  );
}

export default App;
