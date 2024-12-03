import { Flex, Button } from "antd";
import moonIconSVG from '../assets/moon_icon.svg'
import closeIconSVG from '../assets/close_icon.svg'

const moonIcon = <img src={moonIconSVG} className='icon' />
const closeIcon = <img src={closeIconSVG} className='icon' />

export const Header = () => {
    return (
        <Flex justify='space-between' align='center'>
            <Button color="default" variant="text" icon={moonIcon} />
            <p className='title'>JWT Decoder</p>
            <Button color="default" variant="text" icon={closeIcon} />
        </Flex>
    );
};