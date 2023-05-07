import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import {Meta, StoryObj} from '@storybook/react'


export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [(story) => {
    return (
     <>
     <Box as='label' css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
      <Text>Observations:</Text>
      {story()}
      </Box>
     </>
    )
  }]
} as Meta<TextAreaProps>


export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation'
  }
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Add any observation'
  }
}