import { Input } from "antd"

interface TokenInputProps {
    setToken: (token: string) => void
    onClear: () => void
    token: string
    error: string | null
}

export const TokenInput = (props: TokenInputProps) => {
    return (
        <div>
            <p className='subtitle'>JWT token </p>
            <Input
                placeholder="Paste your JWT token"
                className='input'
                allowClear
                value={props.token}
                onChange={(e) => props.setToken(e.target.value)}
                onClear={props.onClear}
                status={props.error ? "error" : ""}
            />
            {props.error && (
                <div style={{ color: '#ff4d4f', marginTop: '8px', fontSize: '14px' }}>
                    {props.error}
                </div>
            )}
        </div>
    )
}