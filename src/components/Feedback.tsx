import { Button } from 'antd'

const FEEDBACK_FORM_URL = 'https://forms.gle/z2UZRPgeeWTj8cR4A'

export const Feedback = () => {
    const handleFeedback = () => {
        window.open(FEEDBACK_FORM_URL, '_blank', 'noreferrer')
    }

    return (
        <Button
            type="default"
            onClick={handleFeedback}
            className='button'
        >
            Send feedback
        </Button>
    )
}