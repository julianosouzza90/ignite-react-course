import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error quas labore saepe excepturi quibusdam nobis ratione nemo! Ratione illum a amet nesciunt quo animi repellat voluptatem optio, odit explicabo.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
