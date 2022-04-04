import { buildSchema, Source } from 'graphql';

const source = new Source(/* GraphQL */`
schema {
  query: Query
  subscription: Subscription
}

"Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive."
directive @entity on OBJECT

"Defined a Subgraph ID for an object type"
directive @subgraphId(id: String!) on OBJECT

"creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API."
directive @derivedFrom(field: String!) on FIELD_DEFINITION

scalar BigDecimal

scalar BigInt

"""The block at which the query should be executed."""
input Block_height {
  """Value containing a block hash"""
  hash: Bytes
  """Value containing a block number"""
  number: Int
  """
  Value containing the minimum block number. 
  In the case of \`number_gte\`, the query will be executed on the latest block only if
  the subgraph has progressed to or past the minimum block number.
  Defaults to the latest block when omitted.
  
  """
  number_gte: Int
}

scalar Bytes

type FuroVesting {
  id: ID!
  vestingCount: BigInt!
  userCount: BigInt!
  transactionCount: BigInt!
}

input FuroVesting_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  vestingCount: BigInt
  vestingCount_not: BigInt
  vestingCount_gt: BigInt
  vestingCount_lt: BigInt
  vestingCount_gte: BigInt
  vestingCount_lte: BigInt
  vestingCount_in: [BigInt!]
  vestingCount_not_in: [BigInt!]
  userCount: BigInt
  userCount_not: BigInt
  userCount_gt: BigInt
  userCount_lt: BigInt
  userCount_gte: BigInt
  userCount_lte: BigInt
  userCount_in: [BigInt!]
  userCount_not_in: [BigInt!]
  transactionCount: BigInt
  transactionCount_not: BigInt
  transactionCount_gt: BigInt
  transactionCount_lt: BigInt
  transactionCount_gte: BigInt
  transactionCount_lte: BigInt
  transactionCount_in: [BigInt!]
  transactionCount_not_in: [BigInt!]
}

enum FuroVesting_orderBy {
  id
  vestingCount
  userCount
  transactionCount
}

"""Defines the order direction, either ascending or descending"""
enum OrderDirection {
  asc
  desc
}

type Query {
  furoVesting(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): FuroVesting
  furoVestings(
    skip: Int = 0
    first: Int = 100
    orderBy: FuroVesting_orderBy
    orderDirection: OrderDirection
    where: FuroVesting_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [FuroVesting!]!
  vesting(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Vesting
  vestings(
    skip: Int = 0
    first: Int = 100
    orderBy: Vesting_orderBy
    orderDirection: OrderDirection
    where: Vesting_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Vesting!]!
  schedule(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Schedule
  schedules(
    skip: Int = 0
    first: Int = 100
    orderBy: Schedule_orderBy
    orderDirection: OrderDirection
    where: Schedule_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Schedule!]!
  schedulePeriod(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): SchedulePeriod
  schedulePeriods(
    skip: Int = 0
    first: Int = 100
    orderBy: SchedulePeriod_orderBy
    orderDirection: OrderDirection
    where: SchedulePeriod_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [SchedulePeriod!]!
  transaction(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  user(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Schedule {
  id: ID!
  vesting: Vesting!
  periods(skip: Int = 0, first: Int = 100, orderBy: SchedulePeriod_orderBy, orderDirection: OrderDirection, where: SchedulePeriod_filter): [SchedulePeriod!]!
}

type SchedulePeriod {
  id: ID!
  schedule: Schedule!
  time: BigInt!
  type: SchedulePeriodType!
  amount: BigInt!
}

enum SchedulePeriodType {
  START
  CLIFF
  STEP
  END
}

input SchedulePeriod_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  schedule: String
  schedule_not: String
  schedule_gt: String
  schedule_lt: String
  schedule_gte: String
  schedule_lte: String
  schedule_in: [String!]
  schedule_not_in: [String!]
  schedule_contains: String
  schedule_contains_nocase: String
  schedule_not_contains: String
  schedule_not_contains_nocase: String
  schedule_starts_with: String
  schedule_starts_with_nocase: String
  schedule_not_starts_with: String
  schedule_not_starts_with_nocase: String
  schedule_ends_with: String
  schedule_ends_with_nocase: String
  schedule_not_ends_with: String
  schedule_not_ends_with_nocase: String
  time: BigInt
  time_not: BigInt
  time_gt: BigInt
  time_lt: BigInt
  time_gte: BigInt
  time_lte: BigInt
  time_in: [BigInt!]
  time_not_in: [BigInt!]
  type: SchedulePeriodType
  type_not: SchedulePeriodType
  type_in: [SchedulePeriodType!]
  type_not_in: [SchedulePeriodType!]
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
}

enum SchedulePeriod_orderBy {
  id
  schedule
  time
  type
  amount
}

input Schedule_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  vesting: String
  vesting_not: String
  vesting_gt: String
  vesting_lt: String
  vesting_gte: String
  vesting_lte: String
  vesting_in: [String!]
  vesting_not_in: [String!]
  vesting_contains: String
  vesting_contains_nocase: String
  vesting_not_contains: String
  vesting_not_contains_nocase: String
  vesting_starts_with: String
  vesting_starts_with_nocase: String
  vesting_not_starts_with: String
  vesting_not_starts_with_nocase: String
  vesting_ends_with: String
  vesting_ends_with_nocase: String
  vesting_not_ends_with: String
  vesting_not_ends_with_nocase: String
}

enum Schedule_orderBy {
  id
  vesting
  periods
}

type Subscription {
  furoVesting(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): FuroVesting
  furoVestings(
    skip: Int = 0
    first: Int = 100
    orderBy: FuroVesting_orderBy
    orderDirection: OrderDirection
    where: FuroVesting_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [FuroVesting!]!
  vesting(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Vesting
  vestings(
    skip: Int = 0
    first: Int = 100
    orderBy: Vesting_orderBy
    orderDirection: OrderDirection
    where: Vesting_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Vesting!]!
  schedule(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Schedule
  schedules(
    skip: Int = 0
    first: Int = 100
    orderBy: Schedule_orderBy
    orderDirection: OrderDirection
    where: Schedule_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Schedule!]!
  schedulePeriod(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): SchedulePeriod
  schedulePeriods(
    skip: Int = 0
    first: Int = 100
    orderBy: SchedulePeriod_orderBy
    orderDirection: OrderDirection
    where: SchedulePeriod_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [SchedulePeriod!]!
  transaction(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  user(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Token {
  id: ID!
  symbol: String!
  symbolSuccess: Boolean!
  name: String!
  nameSuccess: Boolean!
  decimals: BigInt!
  decimalsSuccess: Boolean!
  createdAtBlock: BigInt!
  createdAtTimestamp: BigInt!
}

input Token_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  symbol: String
  symbol_not: String
  symbol_gt: String
  symbol_lt: String
  symbol_gte: String
  symbol_lte: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_contains: String
  symbol_contains_nocase: String
  symbol_not_contains: String
  symbol_not_contains_nocase: String
  symbol_starts_with: String
  symbol_starts_with_nocase: String
  symbol_not_starts_with: String
  symbol_not_starts_with_nocase: String
  symbol_ends_with: String
  symbol_ends_with_nocase: String
  symbol_not_ends_with: String
  symbol_not_ends_with_nocase: String
  symbolSuccess: Boolean
  symbolSuccess_not: Boolean
  symbolSuccess_in: [Boolean!]
  symbolSuccess_not_in: [Boolean!]
  name: String
  name_not: String
  name_gt: String
  name_lt: String
  name_gte: String
  name_lte: String
  name_in: [String!]
  name_not_in: [String!]
  name_contains: String
  name_contains_nocase: String
  name_not_contains: String
  name_not_contains_nocase: String
  name_starts_with: String
  name_starts_with_nocase: String
  name_not_starts_with: String
  name_not_starts_with_nocase: String
  name_ends_with: String
  name_ends_with_nocase: String
  name_not_ends_with: String
  name_not_ends_with_nocase: String
  nameSuccess: Boolean
  nameSuccess_not: Boolean
  nameSuccess_in: [Boolean!]
  nameSuccess_not_in: [Boolean!]
  decimals: BigInt
  decimals_not: BigInt
  decimals_gt: BigInt
  decimals_lt: BigInt
  decimals_gte: BigInt
  decimals_lte: BigInt
  decimals_in: [BigInt!]
  decimals_not_in: [BigInt!]
  decimalsSuccess: Boolean
  decimalsSuccess_not: Boolean
  decimalsSuccess_in: [Boolean!]
  decimalsSuccess_not_in: [Boolean!]
  createdAtBlock: BigInt
  createdAtBlock_not: BigInt
  createdAtBlock_gt: BigInt
  createdAtBlock_lt: BigInt
  createdAtBlock_gte: BigInt
  createdAtBlock_lte: BigInt
  createdAtBlock_in: [BigInt!]
  createdAtBlock_not_in: [BigInt!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
}

enum Token_orderBy {
  id
  symbol
  symbolSuccess
  name
  nameSuccess
  decimals
  decimalsSuccess
  createdAtBlock
  createdAtTimestamp
}

type Transaction {
  id: ID!
  type: TransactionType!
  vesting: Vesting!
  amount: BigInt!
  to: User!
  token: Token!
  toBentoBox: Boolean!
  createdAtBlock: BigInt!
  createdAtTimestamp: BigInt!
}

enum TransactionType {
  DEPOSIT
  WITHDRAWAL
  DISBURSEMENT
}

input Transaction_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  type: TransactionType
  type_not: TransactionType
  type_in: [TransactionType!]
  type_not_in: [TransactionType!]
  vesting: String
  vesting_not: String
  vesting_gt: String
  vesting_lt: String
  vesting_gte: String
  vesting_lte: String
  vesting_in: [String!]
  vesting_not_in: [String!]
  vesting_contains: String
  vesting_contains_nocase: String
  vesting_not_contains: String
  vesting_not_contains_nocase: String
  vesting_starts_with: String
  vesting_starts_with_nocase: String
  vesting_not_starts_with: String
  vesting_not_starts_with_nocase: String
  vesting_ends_with: String
  vesting_ends_with_nocase: String
  vesting_not_ends_with: String
  vesting_not_ends_with_nocase: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  to: String
  to_not: String
  to_gt: String
  to_lt: String
  to_gte: String
  to_lte: String
  to_in: [String!]
  to_not_in: [String!]
  to_contains: String
  to_contains_nocase: String
  to_not_contains: String
  to_not_contains_nocase: String
  to_starts_with: String
  to_starts_with_nocase: String
  to_not_starts_with: String
  to_not_starts_with_nocase: String
  to_ends_with: String
  to_ends_with_nocase: String
  to_not_ends_with: String
  to_not_ends_with_nocase: String
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
  toBentoBox: Boolean
  toBentoBox_not: Boolean
  toBentoBox_in: [Boolean!]
  toBentoBox_not_in: [Boolean!]
  createdAtBlock: BigInt
  createdAtBlock_not: BigInt
  createdAtBlock_gt: BigInt
  createdAtBlock_lt: BigInt
  createdAtBlock_gte: BigInt
  createdAtBlock_lte: BigInt
  createdAtBlock_in: [BigInt!]
  createdAtBlock_not_in: [BigInt!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
}

enum Transaction_orderBy {
  id
  type
  vesting
  amount
  to
  token
  toBentoBox
  createdAtBlock
  createdAtTimestamp
}

type User {
  id: ID!
  incomingVestings(skip: Int = 0, first: Int = 100, orderBy: Vesting_orderBy, orderDirection: OrderDirection, where: Vesting_filter): [Vesting!]!
  outgoingVestings(skip: Int = 0, first: Int = 100, orderBy: Vesting_orderBy, orderDirection: OrderDirection, where: Vesting_filter): [Vesting!]!
  createdAtBlock: BigInt!
  createdAtTimestamp: BigInt!
}

input User_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  createdAtBlock: BigInt
  createdAtBlock_not: BigInt
  createdAtBlock_gt: BigInt
  createdAtBlock_lt: BigInt
  createdAtBlock_gte: BigInt
  createdAtBlock_lte: BigInt
  createdAtBlock_in: [BigInt!]
  createdAtBlock_not_in: [BigInt!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
}

enum User_orderBy {
  id
  incomingVestings
  outgoingVestings
  createdAtBlock
  createdAtTimestamp
}

type Vesting {
  id: ID!
  recipient: User!
  cliffDuration: BigInt!
  stepDuration: BigInt!
  steps: BigInt!
  cliffAmount: BigInt!
  stepAmount: BigInt!
  totalAmount: BigInt!
  withdrawnAmount: BigInt!
  token: Token!
  schedule: Schedule!
  status: VestingStatus!
  createdBy: User!
  fromBentoBox: Boolean!
  startedAt: BigInt!
  expiresAt: BigInt!
  transactionCount: BigInt!
  createdAtBlock: BigInt!
  createdAtTimestamp: BigInt!
  cancelledAtBlock: BigInt!
  cancelledAtTimestamp: BigInt!
}

enum VestingStatus {
  ACTIVE
  CANCELLED
  EXPIRED
}

input Vesting_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  recipient: String
  recipient_not: String
  recipient_gt: String
  recipient_lt: String
  recipient_gte: String
  recipient_lte: String
  recipient_in: [String!]
  recipient_not_in: [String!]
  recipient_contains: String
  recipient_contains_nocase: String
  recipient_not_contains: String
  recipient_not_contains_nocase: String
  recipient_starts_with: String
  recipient_starts_with_nocase: String
  recipient_not_starts_with: String
  recipient_not_starts_with_nocase: String
  recipient_ends_with: String
  recipient_ends_with_nocase: String
  recipient_not_ends_with: String
  recipient_not_ends_with_nocase: String
  cliffDuration: BigInt
  cliffDuration_not: BigInt
  cliffDuration_gt: BigInt
  cliffDuration_lt: BigInt
  cliffDuration_gte: BigInt
  cliffDuration_lte: BigInt
  cliffDuration_in: [BigInt!]
  cliffDuration_not_in: [BigInt!]
  stepDuration: BigInt
  stepDuration_not: BigInt
  stepDuration_gt: BigInt
  stepDuration_lt: BigInt
  stepDuration_gte: BigInt
  stepDuration_lte: BigInt
  stepDuration_in: [BigInt!]
  stepDuration_not_in: [BigInt!]
  steps: BigInt
  steps_not: BigInt
  steps_gt: BigInt
  steps_lt: BigInt
  steps_gte: BigInt
  steps_lte: BigInt
  steps_in: [BigInt!]
  steps_not_in: [BigInt!]
  cliffAmount: BigInt
  cliffAmount_not: BigInt
  cliffAmount_gt: BigInt
  cliffAmount_lt: BigInt
  cliffAmount_gte: BigInt
  cliffAmount_lte: BigInt
  cliffAmount_in: [BigInt!]
  cliffAmount_not_in: [BigInt!]
  stepAmount: BigInt
  stepAmount_not: BigInt
  stepAmount_gt: BigInt
  stepAmount_lt: BigInt
  stepAmount_gte: BigInt
  stepAmount_lte: BigInt
  stepAmount_in: [BigInt!]
  stepAmount_not_in: [BigInt!]
  totalAmount: BigInt
  totalAmount_not: BigInt
  totalAmount_gt: BigInt
  totalAmount_lt: BigInt
  totalAmount_gte: BigInt
  totalAmount_lte: BigInt
  totalAmount_in: [BigInt!]
  totalAmount_not_in: [BigInt!]
  withdrawnAmount: BigInt
  withdrawnAmount_not: BigInt
  withdrawnAmount_gt: BigInt
  withdrawnAmount_lt: BigInt
  withdrawnAmount_gte: BigInt
  withdrawnAmount_lte: BigInt
  withdrawnAmount_in: [BigInt!]
  withdrawnAmount_not_in: [BigInt!]
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
  schedule: String
  schedule_not: String
  schedule_gt: String
  schedule_lt: String
  schedule_gte: String
  schedule_lte: String
  schedule_in: [String!]
  schedule_not_in: [String!]
  schedule_contains: String
  schedule_contains_nocase: String
  schedule_not_contains: String
  schedule_not_contains_nocase: String
  schedule_starts_with: String
  schedule_starts_with_nocase: String
  schedule_not_starts_with: String
  schedule_not_starts_with_nocase: String
  schedule_ends_with: String
  schedule_ends_with_nocase: String
  schedule_not_ends_with: String
  schedule_not_ends_with_nocase: String
  status: VestingStatus
  status_not: VestingStatus
  status_in: [VestingStatus!]
  status_not_in: [VestingStatus!]
  createdBy: String
  createdBy_not: String
  createdBy_gt: String
  createdBy_lt: String
  createdBy_gte: String
  createdBy_lte: String
  createdBy_in: [String!]
  createdBy_not_in: [String!]
  createdBy_contains: String
  createdBy_contains_nocase: String
  createdBy_not_contains: String
  createdBy_not_contains_nocase: String
  createdBy_starts_with: String
  createdBy_starts_with_nocase: String
  createdBy_not_starts_with: String
  createdBy_not_starts_with_nocase: String
  createdBy_ends_with: String
  createdBy_ends_with_nocase: String
  createdBy_not_ends_with: String
  createdBy_not_ends_with_nocase: String
  fromBentoBox: Boolean
  fromBentoBox_not: Boolean
  fromBentoBox_in: [Boolean!]
  fromBentoBox_not_in: [Boolean!]
  startedAt: BigInt
  startedAt_not: BigInt
  startedAt_gt: BigInt
  startedAt_lt: BigInt
  startedAt_gte: BigInt
  startedAt_lte: BigInt
  startedAt_in: [BigInt!]
  startedAt_not_in: [BigInt!]
  expiresAt: BigInt
  expiresAt_not: BigInt
  expiresAt_gt: BigInt
  expiresAt_lt: BigInt
  expiresAt_gte: BigInt
  expiresAt_lte: BigInt
  expiresAt_in: [BigInt!]
  expiresAt_not_in: [BigInt!]
  transactionCount: BigInt
  transactionCount_not: BigInt
  transactionCount_gt: BigInt
  transactionCount_lt: BigInt
  transactionCount_gte: BigInt
  transactionCount_lte: BigInt
  transactionCount_in: [BigInt!]
  transactionCount_not_in: [BigInt!]
  createdAtBlock: BigInt
  createdAtBlock_not: BigInt
  createdAtBlock_gt: BigInt
  createdAtBlock_lt: BigInt
  createdAtBlock_gte: BigInt
  createdAtBlock_lte: BigInt
  createdAtBlock_in: [BigInt!]
  createdAtBlock_not_in: [BigInt!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  cancelledAtBlock: BigInt
  cancelledAtBlock_not: BigInt
  cancelledAtBlock_gt: BigInt
  cancelledAtBlock_lt: BigInt
  cancelledAtBlock_gte: BigInt
  cancelledAtBlock_lte: BigInt
  cancelledAtBlock_in: [BigInt!]
  cancelledAtBlock_not_in: [BigInt!]
  cancelledAtTimestamp: BigInt
  cancelledAtTimestamp_not: BigInt
  cancelledAtTimestamp_gt: BigInt
  cancelledAtTimestamp_lt: BigInt
  cancelledAtTimestamp_gte: BigInt
  cancelledAtTimestamp_lte: BigInt
  cancelledAtTimestamp_in: [BigInt!]
  cancelledAtTimestamp_not_in: [BigInt!]
}

enum Vesting_orderBy {
  id
  recipient
  cliffDuration
  stepDuration
  steps
  cliffAmount
  stepAmount
  totalAmount
  withdrawnAmount
  token
  schedule
  status
  createdBy
  fromBentoBox
  startedAt
  expiresAt
  transactionCount
  createdAtBlock
  createdAtTimestamp
  cancelledAtBlock
  cancelledAtTimestamp
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes
  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!
  """The deployment ID"""
  deployment: String!
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow
  """
  If the subgraph has indexing errors, data will be omitted. The default.
  """
  deny
}
`, `.graphclient/sources/furovesting_kovan/schema.graphql`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});