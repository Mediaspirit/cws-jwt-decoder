import { Input } from "antd"

interface TokenInputProps {
    setToken: (token: string) => void
    onClear: () => void
}

export const TokenInput = (props: TokenInputProps) => {
    return (
        <div>
            <p className='subtitle'>JWT token </p>
            <Input
                placeholder="Paste your JWT token"
                className='input'
                allowClear
                onChange={(e) => props.setToken(e.target.value)}
                onClear={props.onClear}
            />
        </div>
    )
}