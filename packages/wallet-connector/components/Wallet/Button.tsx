import { FC, ReactElement, ReactNode } from 'react'
import { CoinbaseWalletIcon, Menu, MetamaskIcon, WalletConnectIcon, Loader } from '@sushiswap/ui'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { LogoutIcon } from '@heroicons/react/outline'
import Account from '../Account'
import { useIsMounted } from '@sushiswap/hooks'

const Icons: Record<string, ReactNode> = {
  MetaMask: <MetamaskIcon width={16} height={16} />,
  WalletConnect: <WalletConnectIcon width={16} height={16} />,
  'Coinbase Wallet': <CoinbaseWalletIcon width={16} height={16} />,
}

export interface ButtonProps {
  label?: string
  button?: ReactElement<typeof Menu.Button>
  hack?: ReturnType<typeof useConnect>
}

const Button: FC<ButtonProps> = ({ hack, label, button }) => {
  const { data } = useAccount()
  const isMounted = useIsMounted()
  const { disconnect } = useDisconnect()
  const { isConnected, isReconnecting, isConnecting, connectors, connect } = hack || useConnect()

  if (isMounted && !isConnected && !isReconnecting && !isConnecting) {
    return (
      <Menu
        button={
          button || (
            <Menu.Button className="w-full min-w-[158px] !py-2 btn btn !btn-default" as="div">
              {label || 'Connect Wallet'}
            </Menu.Button>
          )
        }
      >
        <Menu.Items>
          <div>
            {connectors.map((conn) => (
              <Menu.Item key={conn.id} onClick={() => connect(conn)} className="group flex gap-3 items-center">
                <div className="-ml-[6px] group-hover:bg-blue-100 rounded-full group-hover:ring-[5px] group-hover:ring-blue-100">
                  {Icons[conn.name] && Icons[conn.name]}
                </div>{' '}
                {conn.name}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    )
  }

  if (isMounted && (isConnected || isReconnecting)) {
    return (
      <div className="z-10 flex items-center border-[3px] border-dark-900 bg-dark-900 rounded-[14px]">
        <div className="px-3">
          <Account.Balance address={data?.address} />
        </div>
        <Menu
          button={
            button || (
              <Menu.Button className="!rounded-xl !py-2 !bg-dark-800 p-px border-dark-1000 hover:ring-1 hover:ring-dark-700 flex gap-3">
                <Account.Avatar address={data?.address} />
                <Account.Name address={data?.address} />
              </Menu.Button>
            )
          }
        >
          <Menu.Items>
            <div>
              <Menu.Item className="group flex gap-3 items-center" onClick={() => disconnect()}>
                <LogoutIcon width={16} height={16} />
                Disconnect
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    )
  }

  return <></>
}

export default Button