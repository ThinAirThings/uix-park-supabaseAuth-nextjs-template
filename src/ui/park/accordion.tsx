'use client'

import type { Assign } from '@ark-ui/react'
import { Accordion } from '@ark-ui/react/accordion'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/src/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps
  extends Assign<JsxStyleProps, Accordion.RootProps>,
    AccordionVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Accordion.Root, 'root')

export const ItemContent = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Accordion.ItemContentProps>
>(Accordion.ItemContent, 'itemContent')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Accordion.ItemIndicatorProps>
>(Accordion.ItemIndicator, 'itemIndicator')

export const Item = withContext<HTMLDivElement, Assign<JsxStyleProps, Accordion.ItemProps>>(
  Accordion.Item,
  'item',
)

export const ItemTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Accordion.ItemTriggerProps>
>(Accordion.ItemTrigger, 'itemTrigger')

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
  type AccordionContextProps as ContextProps,
  type AccordionItemContextProps as ItemContextProps,
} from '@ark-ui/react/accordion'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/accordion'
