import { Flex, Rate as AntRate } from "antd"


export const Rate = () => {
    return (
        <Flex justify='center' gap={8} align='center'>
            <span>Rate us:</span>
            <AntRate className='rate' />
        </Flex>
    )
}