import { Button, Flex, Input } from "antd"
import copyIconSVG from '../assets/copy_icon.svg'
import SyntaxHighlighter from 'react-syntax-highlighter';
import JsonStyle from '../styles/JsonStyle';
import { CSSProperties, useState } from "react";
import copy from 'copy-to-clipboard';
import { CheckCircleOutlined } from "@ant-design/icons";

const copyIcon = <img src={copyIconSVG} className='icon' />

interface OutputProps {
    header: string
    value: string
}

const onClick = (props: OutputProps, setReadyToCopy: (state: boolean) => void) => {
    setReadyToCopy(false)
    copy(props.value)
    setTimeout(() => setReadyToCopy(true), 1000)
}

export const Output = (props: OutputProps) => {
    const [readyToCopy, setReadyToCopy] = useState(true)
    return (
        <Flex vertical>
            <Flex justify="space-between" align="center">
                <span className="subtitle">{props.header}</span>
                <Button color="default" variant="text" icon={readyToCopy ? copyIcon : <CheckCircleOutlined style={{ color: '#f6225d' }} />} onClick={() => onClick(props, setReadyToCopy)} iconPosition="end" />
            </Flex>
            <SyntaxHighlighter
                className="output"
                language="json"
                style={JsonStyle as { [prop: string]: CSSProperties }}
            >
                {props.value}
            </SyntaxHighlighter>
        </Flex >
    )
}