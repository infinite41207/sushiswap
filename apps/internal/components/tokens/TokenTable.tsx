import { XIcon } from '@heroicons/react/solid'
import { ChainId } from '@sushiswap/chain'
import { formatUSD } from '@sushiswap/format'
import { CHAIN_NAME } from '@sushiswap/graph-config'
import { CheckIcon, NetworkIcon } from '@sushiswap/ui'
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { GenericTable } from 'components/Table'
import { Token } from 'lib'
import Image from 'next/image'

import { TokenAdder } from './TokenAdder'

interface TokenTable {
  tokens: Token[]
}

const columnHelper = createColumnHelper<Token>()
function useColumns() {
  return [
    columnHelper.accessor('chainId', {
      header: 'Chain',
      cell: (info) => {
        const chainId = info.getValue()

        return (
          <div className="flex space-x-2">
            <NetworkIcon type="circle" chainId={chainId} width={20} height={20} />
            <div>{CHAIN_NAME[chainId] ?? ChainId[chainId]}</div>
          </div>
        )
      },
      enableHiding: true,
    }),
    columnHelper.accessor('symbol', {
      header: 'Symbol',
      cell: (info) => info.getValue(),
      enableHiding: true,
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
      enableHiding: true,
    }),
    columnHelper.accessor('liquidityUSD', {
      header: 'Liquidity',
      cell: (info) => formatUSD(info.getValue()),
      enableHiding: true,
    }),
    columnHelper.accessor('volumeUSD', {
      header: 'Total Volume',
      cell: (info) => formatUSD(info.getValue()),
      enableHiding: true,
    }),
    columnHelper.accessor('source', {
      header: 'Source',
      cell: (info) => info.getValue(),
      enableHiding: true,
    }),
    columnHelper.accessor('listEntry', {
      header: 'Default List',
      cell: (info) => (
        <div className="flex justify-center w-full">
          {info.getValue() ? (
            <CheckIcon width={24} height={24} className="text-green" />
          ) : (
            <XIcon width={24} height={24} className="text-red" />
          )}
        </div>
      ),
      enableHiding: true,
    }),
    columnHelper.display({
      id: 'addToDefaultList',
      header: 'Adder',
      cell: ({ row }) => {
        if (row.original.listEntry?.logoURI)
          return <Image src={row.original.listEntry.logoURI} height={24} width={24} alt="img" className="rounded-md" />

        return <TokenAdder token={row.original} />
      },
    }),
  ]
}

export function TokenTable({ tokens }: TokenTable) {
  const columns = useColumns()

  const table = useReactTable<Token>({
    data: tokens,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <GenericTable table={table} columns={columns} />
}
