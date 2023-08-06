
import './App.css';
import { Input, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';



function App() {
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];

  return (
    <div className="App">
      <header>
        <p>What is your favourite fruit?</p>
        <Select 
        mode='multiple' 
        allowClear
        maxTagCount={2}
        placeholder='Select fruit' 
        style={{width:"50%"}}>
        
          {fruits.map((fruit, index) => {
            return <Select.Option key={index} value={fruit}></Select.Option>
          })}
        </Select>
      </header>
    </div>
  );
}

export default App;
