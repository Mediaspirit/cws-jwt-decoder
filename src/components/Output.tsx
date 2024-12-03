import { Button, Flex, Input } from "antd"
import copyIconSVG from '../assets/copy_icon.svg'

const copyIcon = <img src={copyIconSVG} className='icon' />
const { TextArea } = Input;

interface OutputProps {
    header: string
}

export const Output = (props: OutputProps) => {
    return (
        <Flex vertical>
            <Flex justify="space-between" align="center">
                <span className="subtitle">{props.header}</span>
                <Button color="default" variant="text" icon={copyIcon} />
            </Flex>
            <TextArea className="output" autoSize readOnly value="Hi" />
        </Flex>
    )
}