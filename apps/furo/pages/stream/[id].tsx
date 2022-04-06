import { FC, useMemo } from 'react'
import ProgressBar, { ProgressColor } from 'ui/progressbar/ProgressBar'
import { getBuiltGraphSDK } from '../../.graphclient'
import Layout from '../../components/Layout'
import BalanceChart from '../../features/stream/BalanceChart'
import { Stream } from '../../features/stream/context/Stream'
import { RawStream, Transaction } from '../../features/stream/context/types'
import StreamTimer from '../../features/stream/StreamTimer'
import TransactionHistory from '../../features/stream/TransactionHistory'
import Typography from '../../../../packages/ui/typography/Typography'
import { LinkIcon } from '@heroicons/react/solid'
import { NotepadIcon } from 'ui/icons'
import { HistoryIcon } from 'ui/icons'
import { Popover } from '@headlessui/react'
import StreamDetailsPopover from '../../features/StreamDetailsPopover'

interface Props {
  stream: RawStream
  transactions: Transaction[]
}

const Streams: FC<Props> = (props) => {
  let { stream: rawStream, transactions } = props
  const stream = useMemo(() => new Stream({ stream: rawStream }), [rawStream])

  return (
    <Layout>
      <div className="flex gap-16">
        <div className="w-[430px]">
          <BalanceChart stream={stream} />
          <div className="flex gap-2 justify-center">
            <div className="cursor-pointer flex items-center gap-2 shadow-md shadow-dark-1000 border border-dark-800 bg-dark-900 rounded-xl px-5 h-11">
              <LinkIcon width={18} height={18} />
              <Typography variant="sm" weight={700} className="text-high-emphesis">
                Links
              </Typography>
            </div>
            <StreamDetailsPopover />
            <div className="cursor-pointer flex items-center gap-2 shadow-md shadow-dark-1000 border border-dark-800 bg-dark-900 rounded-xl px-5 h-11">
              <HistoryIcon width={18} height={18} />
              <Typography variant="sm" weight={700} className="text-high-emphesis">
                History
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-[280px] flex flex-col col-span-2 justify-between">
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex flex-col gap-2 shadow-md shadow-dark-1000 bg-dark-900 border border-dark-800 rounded-2xl p-5">
              <div className="flex justify-between items-center gap-2">
                <Typography variant="sm" weight={400}>
                  Streamed:
                </Typography>
                <Typography variant="lg" weight={700}>
                  {stream.streamedPercentage.toFixed(2)}%
                </Typography>
              </div>
              <ProgressBar progress={stream.streamedPercentage} color={ProgressColor.BLUE} showLabel={false} />
            </div>
            <div className="flex flex-col gap-2 shadow-md shadow-dark-1000 bg-dark-900 border border-dark-800 rounded-2xl p-5">
              <div className="flex justify-between items-center gap-2">
                <Typography variant="sm" weight={400}>
                  Withdrawn:
                </Typography>
                <Typography variant="lg" weight={700}>
                  {stream.withdrawnPercentage.toFixed(2)}%
                </Typography>
              </div>
              <ProgressBar progress={stream.withdrawnPercentage} color={ProgressColor.PINK} showLabel={false} />
            </div>
            <div className="mt-3">
              <StreamTimer stream={stream} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <button>Withdraw</button>
            <button>Transfer</button>
          </div>
        </div>
      </div>
      <TransactionHistory transactions={transactions} />
    </Layout>
  )
}

export default Streams

export async function getServerSideProps({ query }) {
  const sdk = await getBuiltGraphSDK()
  const stream = (await sdk.Stream({ id: query.id })).stream
  const transactions = (await sdk.Transactions({ id: query.id })).transactions
  return {
    props: {
      stream,
      transactions,
    },
  }
}
