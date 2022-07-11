import { CheckIcon } from '@heroicons/react/outline'
import chains, { Chain, ChainId } from '@sushiswap/chain'
import { useDebounce } from '@sushiswap/hooks'
import { classNames, Input, Loader, NetworkIcon, Overlay, SlideIn, Typography } from '@sushiswap/ui'
import { SUPPORTED_CHAIN_IDS } from 'config'
import React, { FC, useCallback, useMemo, useRef, useState } from 'react'

interface NetworkSelectorOverlay {
  open: boolean
  onClose(): void
  onSelect(network: ChainId): void
  selected: ChainId
  className?: string
  networks?: { [k: string]: Chain }
}

export const NetworkSelectorOverlay: FC<NetworkSelectorOverlay> = ({
  networks = Object.fromEntries(
    Object.entries(chains).filter(([chainId]) => SUPPORTED_CHAIN_IDS.includes(Number(chainId)))
  ),
  open,
  onClose,
  onSelect,
  selected,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState<string>()
  const debouncedQuery = useDebounce(query, 200)
  const searching = useRef<boolean>(false)

  const handleSelect = useCallback(
    (chainId: ChainId) => {
      onSelect(chainId)
      onClose()

      setQuery(undefined)
    },
    [onClose, onSelect]
  )

  const filteredChains: [string, Chain][] = useMemo(() => {
    if (!debouncedQuery) {
      searching.current = false
      return Object.entries(networks)
    }

    searching.current = false
    return Object.entries(networks).filter(([k, v]) => v.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
  }, [networks, debouncedQuery])

  return (
    <SlideIn>
      <SlideIn.FromLeft show={open} onClose={onClose} afterEnter={() => inputRef.current?.focus()}>
        <Overlay.Content className="bg-slate-800 !pt-[60px]">
          <Overlay.Header onClose={onClose} title="Select Network" />
          <div
            className={classNames(
              'w-full relative flex items-center justify-between gap-1 rounded-xl focus-within:ring-2'
            )}
          >
            <Input.Address
              id="network-search"
              ref={inputRef}
              placeholder="Search network by name"
              value={query}
              onChange={(val: string) => {
                searching.current = true
                setQuery(val)
              }}
              className="focus:ring-offset-slate-800 !bg-slate-700"
            />
            {searching.current && <Loader size="16px" />}
          </div>
          <div className={classNames('rounded-xl overflow-hidden h-full bg-slate-700 mt-3')}>
            <div className="h-full overflow-auto hide-scrollbar">
              {filteredChains.map(([, chain]) => (
                <Typography
                  as="button"
                  onClick={() => handleSelect(chain.chainId)}
                  key={chain.chainId}
                  variant="sm"
                  className={classNames(
                    selected === chain.chainId
                      ? 'text-slate-200 !font-bold hover:text-white'
                      : 'text-slate-400 hover:text-white',
                    'flex w-full items-center gap-1.5 cursor-pointer pr-3 pl-1.5 group hover:bg-blue'
                  )}
                >
                  {selected === chain.chainId ? (
                    <div className="flex items-center justify-center w-8 h-8">
                      <CheckIcon width={24} height={24} className="group-hover:text-white text-blue" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8">
                      <NetworkIcon type="naked" chainId={chain.chainId} width={24} height={24} />
                    </div>
                  )}
                  {chain.name}
                </Typography>
              ))}
            </div>
          </div>
        </Overlay.Content>
      </SlideIn.FromLeft>
    </SlideIn>
  )
}
