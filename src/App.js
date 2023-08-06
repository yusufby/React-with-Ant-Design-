
import { useState } from 'react';
import './App.css';
import { Button, Collapse, Typography} from 'antd';



function App() {
  const [showAlert, setShowAlert]=useState(false);

  const onFinish = () => {
    
    setTimeout(()=>{
      setShowAlert(true);
    },2000);
  }
  return (
    <div className='App'>
    <Collapse 
    accordion={false}
     expandIconPosition='right' 
     defaultActiveKey={["1","2"]} 
     bordered={false}
     ghost={true}
     >
        <Collapse.Panel extra={<Button>Download</Button>} key={"1"} header="this is first one">
            <Typography.Text>
              This is the first content
            </Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel key={"2"} header="this is second one">
            <Typography.Text>
              This is the second content
            </Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel  collapsible="disabled" key={"3"} header="this is third one">
            <Typography.Text>
              This is the third content
            </Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel key={"4"} header="this is fourth one">
            <Typography.Text>
              This is the fourth content
            </Typography.Text>
        </Collapse.Panel>

    </Collapse>
    </div>
  )
}
export default App;
