import React, { FC } from 'react'
import { Dialog as HeadlessDialog } from '@headlessui/react'
import { ExtractProps } from '../types'
import { classNames } from '../lib/classNames'

export type DialogDescriptionProps = ExtractProps<typeof HeadlessDialog.Description> & {}

const DialogDescription: FC<DialogDescriptionProps> = ({ className, ...props }) => {
  return (
    <HeadlessDialog.Description
      {...props}
      className={classNames(className, 'text-sm text-slate-500 dark:text-slate-400')}
    />
  )
}

export default DialogDescription
