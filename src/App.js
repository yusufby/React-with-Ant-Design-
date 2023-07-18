
import './App.css';
import { Form, Input, Button } from 'antd';



function App() {

  const onFinish = (e) => {
    console.log(e);
  }


  return (
    <div className="App">
      <header>
        <Form onFinish={onFinish}>
          <Form.Item label='user name' name="username" required>
            <Input placeholder='user name'>
            </Input>
          </Form.Item>

          <Form.Item label='email' name="email" required>
            <Input placeholder='email'>
            </Input>
          </Form.Item>

          <Form.Item label='password' name="password" a>
            <Input placeholder='password' type='password' >
            </Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>Log In</Button>
          </Form.Item>
        </Form>


      </header>
    </div>
  );
}

export default App;
