import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento BOX</Text>
      </>
    ),
    variant: 'primary',
    size: 'md',
    disabled: false,
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}