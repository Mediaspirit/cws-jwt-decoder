import './App.css'
import { Flex, Button, Card, ConfigProvider } from 'antd'
import { Header } from './components/Header'
import { TokenInput } from './components/TokenInput'
import { Divider } from './components/Divider'
import { Rate } from './components/Rate'
import { Output } from './components/Output'
import { useState } from 'react'
import { jwtDecode } from "jwt-decode";

const onDecodePressed = (token: string,
  setTokenHeader: (header: string) => void,
  setTokenPayload: (payload: string) => void) => {
  try {
    const header = jwtDecode(token, { header: true })
    const payload = jwtDecode(token)
    setTokenHeader(JSON.stringify(header))
    setTokenPayload(JSON.stringify(payload))
  } catch (error) {
    setTokenHeader('')
    setTokenPayload('')
  }
}


const App: React.FC = () => {
  const [token, setToken] = useState<string>('')
  const [tokenHeader, setTokenHeader] = useState<string>('')
  const [tokenPayload, setTokenPayload] = useState<string>('')

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f6225d',
          borderRadius: 12,
        },
      }}
    >
      <Card>
        <Flex vertical gap="large">
          <Header />
          <TokenInput setToken={setToken} />
          {/* <Output header="Header" />
          <Output header="Payload" /> */}
          {tokenHeader && <p>{tokenHeader}</p>}
          {tokenPayload && <p>{tokenPayload}</p>}
          <Button type="primary" onClick={() => onDecodePressed(token, setTokenHeader, setTokenPayload)} className='button'>Decode</Button>
          <Divider />
          <Button className='button'>Send feedback</Button>
          <Rate />
        </Flex>
      </Card>
    </ConfigProvider>
  )
}

export default App
