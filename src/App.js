import React from 'react';
import { Layout } from 'antd';
import { Input } from 'antd';
import { Button, Space } from 'antd';
import './style.css';
const { TextArea } = Input;

const { Header, Footer, Sider, Content } = Layout;

function count_words() {}

const App = () => (
  <>
    <Layout>
      <Header>
        <top>Character Counter</top>
      </Header>
      <Content>
        <TextArea
          showCount={true}
          rows={10}
          placeholder={'Paste text here...'}
        />
        <br />
      </Content>
    </Layout>
  </>
);
export default App;
