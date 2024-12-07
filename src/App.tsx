import './App.css'
import { Flex, Card, Button, ConfigProvider, theme as rtheme } from 'antd'
import { Header } from './components/Header'
import { TokenInput } from './components/TokenInput'
import { Divider } from './components/Divider'
import { Rate } from './components/Rate'
import { Output } from './components/Output'
import { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { Feedback } from './components/Feedback'
import { storageGet, storageSet } from './utils/localStorage'

const TOKEN_STORAGE_KEY = 'saved_jwt_token'

const onDecodePressed = (token: string,
  setTokenHeader: (header: string) => void,
  setTokenPayload: (payload: string) => void) => {
  try {
    const header = jwtDecode(token, { header: true })
    const payload = jwtDecode(token)
    setTokenHeader(JSON.stringify(header, null, 4))
    setTokenPayload(JSON.stringify(payload, null, 4))
  } catch (error) {
    setTokenHeader('')
    setTokenPayload('')
  }
}

const App: React.FC = () => {
  const [token, setToken] = useState<string>('')
  const [tokenHeader, setTokenHeader] = useState<string>('')
  const [tokenPayload, setTokenPayload] = useState<string>('')
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    // Load saved token on startup
    storageGet(TOKEN_STORAGE_KEY, (savedToken) => {
      if (savedToken) {
        setToken(savedToken)
        onDecodePressed(savedToken, setTokenHeader, setTokenPayload)
      }
    })
  }, [])

  const handleClose = () => {
    // Save token before closing
    storageSet(TOKEN_STORAGE_KEY, token)
    window.close()
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'light' ? rtheme.defaultAlgorithm : rtheme.darkAlgorithm,
        token: {
          colorPrimary: '#f6225d',
          borderRadius: 12,
        },
      }}
    >
      <Card bordered={false} style={{ borderRadius: 0 }}>
        <Flex vertical gap="large">
          <Header theme={theme} setTheme={setTheme} onClose={handleClose} />
          <TokenInput
            token={token}
            setToken={setToken}
            onClear={() => {
              setToken('')
              onDecodePressed('', setTokenHeader, setTokenPayload)
            }}
          />
          {tokenHeader && <Output theme={theme} header="Header" value={tokenHeader} />}
          {tokenPayload && <Output theme={theme} header="Payload" value={tokenPayload} />}
          <Button type="primary" onClick={() => onDecodePressed(token, setTokenHeader, setTokenPayload)} className='button'>Decode</Button>
          <Divider />
          <Feedback />
          <Rate />
        </Flex>
      </Card>
    </ConfigProvider>
  )
}

export default App
