import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'


export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep:1
  },
  decorators:[
    (story) => {
      return (
        <>
          <Box>
            {story()}
          </Box>
        </>
      )
    }
  ]
} as Meta


export const Primary:StoryObj<MultiStepProps> = {}
export const full:StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  }
}