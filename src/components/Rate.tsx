import { Flex, Rate as AntRate } from "antd"
import { useEffect, useState } from "react"
import { storageGet, storageSet } from '../utils/localStorage'

const RATING_KEY = 'app_rating_score'
const FEEDBACK_FORM_LINK = 'https://forms.gle/AgvRvyJwZduJtaVF7'
const GOOD_REVIEW_LINK = 'https://chromewebstore.google.com/detail/decode-jwt/clphejlgpdmjgbnkpjaibcikjgbbicnc/reviews'

export const Rate = () => {
    const [value, setValue] = useState<number>(0)
    const [hasRated, setHasRated] = useState<boolean>(false)

    useEffect(() => {
        storageGet(RATING_KEY, (val) => {
            if (val) {
                setValue(+val)
                setHasRated(true)
            }
        })
    }, [])

    const handleChange = (newValue: number) => {
        // If user has already rated, don't do anything
        if (hasRated) {
            return
        }

        setValue(newValue)
        setHasRated(true)
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
            <AntRate className='rate' value={value} onChange={handleChange} disabled={hasRated} />
        </Flex>
    )
}