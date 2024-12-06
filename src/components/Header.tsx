import { Flex, Button, Typography } from "antd";
import moonIconSVG from '../assets/moon_icon.svg'
import closeIconSVG from '../assets/close_icon.svg'

const moonIcon = <img src={moonIconSVG} className='icon' />
const closeIcon = <img src={closeIconSVG} className='icon' />

interface HeaderProps {
    setTheme: (theme: string) => void
    theme: string
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Flex justify='space-between' align='center'>
            <Button color="default" variant="text" icon={moonIcon} onClick={() => {
                if (props.theme === "light") props.setTheme('dark')
                if (props.theme === "dark") props.setTheme('light')
            }} />
            <Typography >JWT Decoder</Typography>
            <Button color="default" variant="text" icon={closeIcon} />
        </Flex>
    );
};