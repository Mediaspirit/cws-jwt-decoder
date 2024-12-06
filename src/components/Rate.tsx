import { Flex, Rate as AntRate } from "antd"
import { useEffect, useState } from "react"
import { storageGet, storageSet } from '../utils/localStorage'

const RATING_KEY = 'app_rating_score'
const FEEDBACK_FORM_LINK = 'https://forms.gle/AgvRvyJwZduJtaVF7'
const GOOD_REVIEW_LINK = 'https://chromewebstore.google.com/detail/___YOUR_EXT___/reviews'


export const Rate = () => {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        storageGet(RATING_KEY, (val) => {
            if (val) {
                setValue(+val)
            }
        })
    }, [])

    const handleChange = (newValue: number) => {
        setValue(newValue)
        storageSet(RATING_KEY, newValue)

        if (newValue > 3) {
            window.open(GOOD_REVIEW_LINK, '_blank', 'noreferrer')
        } else {
            window.open(FEEDBACK_FORM_LINK, '_blank', 'noreferrer')
        }
    }

    return (
        <Flex justify='center' gap={8} align='center'>
            <span>Rate us:</span>
            <AntRate className='rate' value={value} onChange={handleChange} />
        </Flex>
    )
}