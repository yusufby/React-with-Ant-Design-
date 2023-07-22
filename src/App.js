
import { useState } from 'react';
import './App.css';
import { Form, Input, Button, message,Alert } from 'antd';



function App() {
  const [showAlert, setShowAlert]=useState(false);

  const onFinish = () => {
    
    setTimeout(()=>{
      setShowAlert(true);
    },2000);
  }
  return (
    <div className='App'>
      <header className='App-header'>
      {showAlert && <Alert type='error' description='There was an error' closable />}
        <Form onFinish={onFinish}>
          <Form.Item label="User name" name="username">
            <Input placeholder='username' required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder='password' type='password' required></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button block type='primary' htmlType='submit'>Submit </Button>
          </Form.Item>
        </Form>

      </header>

    </div>
  )
}
export default App;
