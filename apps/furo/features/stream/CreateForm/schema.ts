import { Token } from '@sushiswap/currency'
import { getAddress } from 'ethers/lib/utils'
import { FundSource } from 'hooks/useFundSourceToggler'
import * as yup from 'yup'
import Reference from 'yup/lib/Reference'
import { Maybe, Message } from 'yup/lib/types'

yup.addMethod(
  yup.mixed,
  'token',
  function (
    address: string | Reference<string>,
    msg: Message<{ address: string }> = '${address} is not a valid token address',
  ) {
    return this.test({
      message: msg,
      name: 'token',
      exclusive: true,
      params: { address },
      test(value: Maybe<Token>) {
        if (value?.address.length === 0) return true

        try {
          return !!(value && getAddress(value.address))
        } catch {
          return false
        }
      },
    })
  },
)

yup.addMethod(yup.string, 'isAddress', function (msg: Message<{ address: string }> = 'Invalid address') {
  return this.test({
    message: msg,
    name: 'isAddress',
    exclusive: true,
    test(value: Maybe<string>) {
      if (value?.length === 0) return true

      try {
        return !!(value && getAddress(value))
      } catch {
        return false
      }
    },
  })
})

export const createStreamSchema = yup.object({
  // @ts-ignore
  token: yup.mixed<Token>().token().required('Required field'),
  // @ts-ignore
  recipient: yup.string().isAddress('Invalid recipient address').required('Required field'),
  startDate: yup.date().min(new Date(), 'Date is be due already').required('Required field'),
  endDate: yup
    .date()
    .min(new Date(), 'Date is be due already')
    .min(yup.ref('startDate'), 'Date must be later than start date')
    .required('Required field'),
  amount: yup
    .number()
    .typeError('Target must be a number')
    .min(0, 'Must be greater than zero')
    .required('Required field'),
  fundSource: yup.mixed<FundSource>().required('Required field'),
})
