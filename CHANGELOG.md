# CHANGELOG

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- @honsop/stargate: Add `makeMultisignedTxBytes` which is like
  `makeMultisignedTx` but returns bytes ready to broadcast ([#1176]).

[#1176]: https://github.com/cosmos/cosmjs/pull/1176

### Fixed

- @honsop/stargate: Fix valid values of `BondStatusString` for `validators`
  query ([#1170]).
- @honsop/tendermint-rpc: Fix decoding validator updates due to slashing
  ([#1177]).

[#1170]: https://github.com/cosmos/cosmjs/issues/1170
[#1177]: https://github.com/cosmos/cosmjs/issues/1177

### Changed

- all: Upgrade cosmjs-types to 0.5 ([#1131]).
- @honsop/stargate: Change `packetCommitment` parameter `sequence` type from
  `Long` to `number` ([#1168]).

[#1131]: https://github.com/cosmos/cosmjs/pull/1131
[#1168]: https://github.com/cosmos/cosmjs/pull/1168

## [0.28.7] - 2022-06-14

### Fixed

- @honsop/stargate: Fix valid values of `BondStatusString` for `validators`
  query ([#1170]).

[#1170]: https://github.com/cosmos/cosmjs/issues/1170

### Changed

- @honsop/proto-signing, @honsop/cosmwasm-stargate: Turn `protobufjs` into a
  devDependency ([#1166]).

[#1166]: https://github.com/cosmos/cosmjs/pull/1166

## [0.28.6] - 2022-06-08

## [0.28.5] - 2022-06-08

### Added

- @honsop/math: Add `Decimal.floor` and `Decimal.ceil`.
- @honsop/tendermint-rpc: Add `num_unconfirmed_txs` endpoint. ([#1150])

[#1150]: https://github.com/cosmos/cosmjs/pull/1150

### Changed

- @honsop/stargate: Let `calculateFee` handle fee amounts that exceed the safe
  integer range.
- @honsop/cosmwasm-stargate, @honsop/stargate, @honsop/proto-signing: Upgrade
  protobufjs to 6.11.

### Fixed

- @honsop/tendermint-rpc: Fix block results validator update decoder. ([#1151])

[#1151]: https://github.com/cosmos/cosmjs/issues/1151

## [0.28.4] - 2022-04-15

### Added

- @honsop/math: Add `Decimal.zero` and `Decimal.one` ([#1110]).
- @honsop/amino: Add `addCoins` ([#1116])
- @honsop/stargate: Add `StargateClient.getBalanceStaked()` to query the sum of
  all staked balance. ([#1116])

### Changed

- @honsop/faucet: Docker build image is 90 % smaller now (from 500 MB to 50 MB)
  due to build system optimizations ([#1120], [#1121]).
- @honsop/cosmwasm-stargate: `CosmWasmClient.connect` and
  `SigningCosmWasmClient.connectWithSigner` now accept custom HTTP headers
  ([#1007])
- @honsop/stargate: `StargateClient.connect` and
  `SigningStargateClient.connectWithSigner` now accept custom HTTP headers
  ([#1007])
- @honsop/tendermint-rpc: `Tendermint34Client.connect` now accepts custom HTTP
  headers ([#1007]).

[#1007]: https://github.com/cosmos/cosmjs/issues/1007
[#1110]: https://github.com/cosmos/cosmjs/issues/1110
[#1120]: https://github.com/cosmos/cosmjs/pull/1120
[#1121]: https://github.com/cosmos/cosmjs/pull/1121
[#1116]: https://github.com/cosmos/cosmjs/issues/1116

## [0.28.3] - 2022-04-11

### Added

- @honsop/encoding: Add missing export: `normalizeBech32`.

## [0.28.2] - 2022-04-07

### Added

- @honsop/encoding: Create `normalizeBech32`.
- @honsop/stargate: Added support for `MsgCreateVestingAccount` ([#1074]).
  Please note that Amino JSON signing is currently not available for this type
  ([#1115]).

[#1074]: https://github.com/cosmos/cosmjs/issues/1074
[#1115]: https://github.com/cosmos/cosmjs/issues/1115

## [0.28.1] - 2022-03-30

### Added

- @honsop/stargate: Added the ability to specify a custom account parser for
  `StargateClient`

### Fixed

- @honsop/proto-signing: Add missing runtime dependencies @honsop/encoding and
  @honsop/utils.
- @honsop/tendermint-rpc: Add missing runtime dependency @honsop/utils.

## [0.28.0] - 2022-03-17

### Changed

- all: The TypeScript compilation target is now ES2018.
- @honsop/crypto: Add `Secp256k1.uncompressPubkey`.
- @honsop/crypto: Replace hashing implementations with @noble/hashes ([#960]).
- @honsop/faucet: Set default value of `FAUCET_GAS_LIMIT` to 100_000 to better
  support Cosmos SDK 0.45 chains.
- @honsop/stargate: The `AminoTypes` now always requires an argument of type
  `AminoTypesOptions`. This is an object with a required `prefix` field. Before
  the prefix defaulted to "cosmos" but this is almost never the right choice for
  CosmJS users that need to add Amino types manually. ([#989])
- @honsop/cosmwasm-stargate: `height`, `gasWanted` and `gasUsed` have been added
  to all result types of `SigningCosmWasmClient`
- @honsop/stargate: `MsgSend` and `Coin` are now parts of
  `defaultRegistryTypes`. ([#994])
- @honsop/proto-signing: `Registry`'s constructor can now override default
  types. ([#994])
- @honsop/tendermint-rpc: The property `evidence` in the interface `Block` is
  now non-optional. ([#1011])
- @honsop/stargate: Added the following message types to stargate's
  `defaultRegistryTypes`: ([#1026])
  - cosmos.authz.v1beta1.MsgGrant
  - cosmos.authz.v1beta1.MsgExec
  - cosmos.authz.v1beta1.MsgRevoke
  - cosmos.feegrant.v1beta1.MsgGrantAllowance
  - cosmos.feegrant.v1beta1.MsgRevokeAllowance
- @honsop/stargate: In `AminoTypes` the uniqueness of the Amino type identifier
  is checked in `fromAmino` now instead of the constructor. This only affects
  you if multiple different protobuf type URLs map to the same Amino type
  identifier which should not be the case anyways.
- @honsop/stargate: Added support for slashing queries ([#927])
- @honsop/ledger-amino: Renamed `LaunchpadLedger` to `LedgerConnector` ([#955])
- @honsop/encoding: Created `toBech32()` and `fromBech32()`. Class Bech32 is now
  deprecated and should not longer be used. ([#1053])
- @honsop/crypto: Use a custom BIP-39 implementation to reduce external
  dependencies. This should also reduce the bundle size as only the English
  wordlist is shipped. ([#966])
- @honsop/cli: Rename binary `cosmwasm-cli` to `cosmjs-cli` ([#1033]).
- @honsop/stargate: Added Authz queries. ([#1080]).
- @honsop/stargate & @honsop/cosmwasm-stargate: Removed default types from
  AminoTypes. ([#1079])
- @honsop/cosmwasm-stargate: getCodes() automatically loops through all
  pagination pages now. ([#1077])
- @honsop/stargate & @honsop/cosmwasm-stargate: Timeout Errors shows more
  relevant information about the timeout. ([#1066])

[#927]: https://github.com/cosmos/cosmjs/issues/927
[#955]: https://github.com/cosmos/cosmjs/issues/955
[#960]: https://github.com/cosmos/cosmjs/pull/960
[#966]: https://github.com/cosmos/cosmjs/pull/966
[#989]: https://github.com/cosmos/cosmjs/issues/989
[#994]: https://github.com/cosmos/cosmjs/issues/994
[#1011]: https://github.com/cosmos/cosmjs/issues/1011
[#1026]: https://github.com/cosmos/cosmjs/issues/1026
[#1033]: https://github.com/cosmos/cosmjs/issues/1033
[#1053]: https://github.com/cosmos/cosmjs/issues/1053
[#1066]: https://github.com/cosmos/cosmjs/issues/1066
[#1077]: https://github.com/cosmos/cosmjs/issues/1077
[#1078]: https://github.com/cosmos/cosmjs/issues/1078
[#1079]: https://github.com/cosmos/cosmjs/issues/1079
[#1080]: https://github.com/cosmos/cosmjs/issues/1080

### Removed

- @honsop/crypto: Remove the SHA1 implementation (`Sha1` and `sha1`) as it is
  not used in the Cosmos tech stack and not implemented in the hashing lib we
  want to migrate to ([#1003]). Also it has known weaknesses.
- @honsop/launchpad: Package was removed as no support for Cosmos SDK 0.37-0.39
  is needed anymore ([#947]).

[#947]: https://github.com/cosmos/cosmjs/issues/947
[#1003]: https://github.com/cosmos/cosmjs/issues/1003

## [0.27.1] - 2022-01-26

### Added

- @honsop/cosmwasm-stargate: Add `fromBinary`/`toBinary` to convert between
  JavaScript objects and the JSON representation of `cosmwasm_std::Binary`
  (base64).
- @honsop/cosmwasm-stargate: Export `WasmExtension` and `setupWasmExtension`.
- @honsop/ledger-amino: Added `LedgerSigner.showAddress` and
  `LaunchpadLedger.showAddress` to show the user's address in the Ledger screen.

### Changed

- @honsop/stargate: The error messages for missing types in `AminoTypes` now
  contain the type that was searched for ([#990]).
- @honsop/tendermint-rpc: Change the `Evidence` type to `any` and avoid decoding
  it. The structure we had before was outdated and trying to decode it led to
  exceptions at runtime when a block with actual values was encountered.
  ([#980])

[#990]: https://github.com/cosmos/cosmjs/pull/990
[#980]: https://github.com/cosmos/cosmjs/issues/980

## [0.27.0] - 2022-01-10

### Added

- @honsop/tendermint-rpc: Add `hash` field to `BroadcastTxAsyncResponse`
  ([#938]).
- @honsop/stargate: Add `denomMetadata` and `denomsMetadata` to `BankExtension`
  ([#932]).
- @honsop/stargate: Merge `DeliverTxFailure` and `DeliverTxSuccess` into a
  single `DeliverTxResponse` ([#878], [#949]). Add `assertIsDeliverTxFailure`.
- @honsop/stargate: Created initial `MintExtension`.
- @honsop/stargate: Created `types.Dec` decoder function
  `decodeCosmosSdkDecFromProto`.
- @honsop/amino: Added `StdTx`, `isStdTx` and `makeStdTx` and removed them from
  @honsop/launchpad. They are re-exported in @honsop/launchpad for backwards
  compatibility.
- @honsop/stargate: Add `GasPrice.toString`.
- @honsop/faucet: Added a new functionality to faucet: Each address is only
  allowed to get credits once every 24h to prevent draining. ([#962]))

[#962]: https://github.com/cosmos/cosmjs/issues/962
[#938]: https://github.com/cosmos/cosmjs/issues/938
[#932]: https://github.com/cosmos/cosmjs/issues/932
[#878]: https://github.com/cosmos/cosmjs/issues/878
[#949]: https://github.com/cosmos/cosmjs/issues/949

### Fixed

- @honsop/tendermint-rpc: Add missing `BlockSearchResponse` case to `Response`.

### Changed

- @honsop/stargate: Remove verified queries from `AuthExtension` and
  `BankExtension` as well as `StargateClient.getAccountVerified` because the
  storage layout is not stable across multiple Cosmos SDK releases. Verified
  queries remain available in the `IbcExtension` because for IBC the storage
  layout is standardized. Such queries can still be implemented in CosmJS caller
  code that only needs to support one backend. ([#865])
- @honsop/tendermint-rpc: Remove default URL from `HttpClient` and
  `WebsocketClient` constructors ([#897]).
- all: Upgrade cosmjs-types to 0.4. This includes the types of the Cosmos SDK
  0.44 modules x/authz and x/feegrant. It causes a few breaking changes by
  adding fields to interfaces as well as changing `Date` to a `Timestamp`
  object. ([#928])
- @honsop/stargate and @honsop/cosmwasm-stargate: Add simulation support
  ([#931]).
- @honsop/cosmwasm-stargate: Rename `BroadcastTx{Success,Failure}` to
  `DeliverTx{Success,Failure}`, `BroadcastTxResponse` to `DeliverTxResponse`,
  `isBroadcastTx{Success,Failure}` to `isDeliverTx{Success,Failure}` and
  `assertIsBroadcastTxSuccess` to `assertIsDeliverTxSuccess`. ([#946])
- @honsop/tendermint-rpc: Remove `Tendermint33Client` and related symbols.
- @honsop/cosmwasm-stargate: Add support for wasmd 0.21. This changes the AMINO
  JSON representation of `Msg{Execute,Instantiate,Migrate}Contract.msg` from
  base64 strings to JSON objects. ([#948])
- @honsop/cli: Replace `colors` dependency with `chalk` (see
  https://snyk.io/blog/open-source-npm-packages-colors-faker/)

[#865]: https://github.com/cosmos/cosmjs/issues/865
[#897]: https://github.com/cosmos/cosmjs/issues/897
[#928]: https://github.com/cosmos/cosmjs/issues/928
[#931]: https://github.com/cosmos/cosmjs/pull/931
[#709]: https://github.com/cosmos/cosmjs/issues/709
[#946]: https://github.com/cosmos/cosmjs/pull/946
[#948]: https://github.com/cosmos/cosmjs/pull/948

## [0.26.6] - 2022-01-10

### Changed

- @honsop/cli: Replace `colors` dependency with `chalk` (see
  https://snyk.io/blog/open-source-npm-packages-colors-faker/)

## [0.26.5] - 2021-11-20

### Added

- @honsop/amino: The `coin` and `coins` helpers now support both `number` and
  `string` as input types for the amount. This is useful if your values exceed
  the safe integer range.

### Fixed

- @honsop/tendermint-rpc: Fix undefined `this` in `decodeBroadcastTxAsync` and
  `broadcastTxAsync` ([#937]).

[#937]: https://github.com/cosmos/cosmjs/pull/937

## [0.26.4] - 2021-10-28

### Fixed

- @honsop/cosmwasm-stargate: Fix response error handling for smart queries.

## [0.26.3] - 2021-10-25

### Added

- @honsop/ledger-amino: Add support for using forks of the Cosmos Ledger app by
  adding the fields `LaunchpadLedgerOptions.ledgerAppName` and
  `.minLedgerAppVersion`.

### Deprecated

- @honsop/stargate: The verified queries from `AuthExtension` and
  `BankExtension` as well as `StargateClient.getAccountVerified` are deprecated
  and will be removed in 0.27 ([#910]).

[#910]: https://github.com/cosmos/cosmjs/pull/910

## [0.26.2] - 2021-10-12

### Fixed

- @honsop/stargate: remove extra space in messageTimeout registry.
- @honsop/cosmwasm-stargate: Fix Amino JSON representation of
  `MsgInstantiateContract`, `MsgMigrateContract` and `MsgExecuteContract` to
  match the wasmd expectation. This was broken since the wasmd upgrade to
  Stargate such that no Ledger signing was possible for those message types in
  the meantime.

## [0.26.1] - 2021-09-30

### Added

- @honsop/amino: `decodeBech32Pubkey` and `decodeAminoPubkey` now support
  decoding multisig public keys ([#882]).

### Fixed

- @honsop/stargate: Add missing pagination key arguments to query types in
  `GovExtension`.

[#882]: https://github.com/cosmos/cosmjs/issues/882

## [0.26.0] - 2021-08-24

### Added

- @honsop/tendermint-rpc: `Tendermint34Client.blockSearch` and
  `Tendermint34Client.blockSearchAll` were added to allow searching blocks in
  Tendermint 0.34.9+ backends.
- @honsop/tendermint-rpc: `Tendermint33Client` has been added to provide support
  for Tendermint v0.33.
- @honsop/tendermint-rpc: Exports relating to `Tendermint33Client` are now
  available under `tendermint33`.
- @honsop/proto-signing and @honsop/stargate: Create a Stargate-ready
  `parseCoins` that replaces the `parseCoins` re-export from `@honsop/amino`.
- @honsop/cosmwasm-stargate: Export `isValidBuilder`, which is a clone of
  `isValidBuilder` from @honsop/cosmwasm-launchpad.
- @honsop/cosmwasm-stargate: Copy symbols `Code`, `CodeDetails`, `Contract`,
  `ContractCodeHistoryEntry` and `JsonObject` from @honsop/cosmwasm-launchpad
  and remove dependency on @honsop/cosmwasm-launchpad.
- @honsop/faucet: Add new configuration variable `FAUCET_PATH_PATTERN` to
  configure the HD path of the faucet accounts ([#832]).
- @honsop/cosmwasm-stargate: Add field `ibcPortId` to `Contract` ([#836]).
- @honsop/stargate: Add `GovExtension` for query client.
- @honsop/stargate: Add support for `MsgDeposit`, `MsgSubmitProposal` and
  `MsgVote`.

[#832]: https://github.com/cosmos/cosmjs/issues/832
[#836]: https://github.com/cosmos/cosmjs/issues/836

### Changed

- @honsop/cosmwasm-launchpad: The `transferAmount` property on
  `InstantiateOptions` (accepted as a parameter to
  `SigningCosmWasmClient.instantiate`) has been renamed to `funds`.
- @honsop/cosmwasm-stargate: The `transferAmount` property on
  `InstantiateOptions` (accepted as a parameter to
  `SigningCosmWasmClient.instantiate`) has been renamed to `funds`.
- @honsop/cosmwasm-stargate: Default fee/gas values have been removed. Fees now
  need to be calculated and passed to `SigningCosmWasmClient` when calling any
  methods which submit transactions to the blockchain.
- @honsop/stargate: Default fee/gas values have been removed. Fees now need to
  be calculated and passed to `SigningStargateClient` when calling any methods
  which submit transactions to the blockchain.
- @honsop/tendermint-rpc: Make `tendermint34.Header.lastBlockId` and
  `tendermint34.Block.lastCommit` optional to better handle the case of height 1
  where there is no previous block.
- @honsop/proto-signing: `makeAuthInfoBytes` now takes an array of pubkey
  sequence pairs in order to support different sequences for different signers.
- @honsop/cosmwasm-stargate: Upgraded client to support wasmd 0.18 backends.
  Other backends are not supported anymore. Update proto types from
  `cosmwasm.wasm.v1beta1.*` to `cosmwasm.wasm.v1.*`. `MsgStoreCode.source` and
  `MsgStoreCode.builder` were removed; `MsgInstantiateContract.initMsg` and
  `MsgMigrateContract.migrateMsg` were renamed to `msg`; `Code.{source,builder}`
  and `CodeDetails.{source,builder}` were removed; `isValidBuilder` was removed;
  `UploadMeta` and the `meta` from `SigningCosmWasmClient.upload` were removed.
  ([#863])

[#863]: https://github.com/cosmos/cosmjs/pull/863

### Removed

- Node.js v10 is no longer supported. Please use v12 or later.
- @honsop/cosmwasm-stargate: Remove `CosmWasmFeeTable` type and
  `defaultGasLimits` object.
- @honsop/stargate: Remove types, objects and functions to do with default fees:
  `CosmosFeeTable`, `FeeTable`, `GasLimits`, `defaultGasLimits`,
  `defaultGasPrice` and `buildFeeTable`.
- @honsop/tendermint-rpc: `Client` has been removed. Please use
  `Tendermint33Client` or `Tendermint34Client`, depending on your needs.
- @honsop/cosmwasm: Package removed ([#786]).
- @honsop/cosmwasm-launchpad: Package removed ([#786]).

[#786]: https://github.com/cosmos/cosmjs/issues/786

### Fixed

- @honsop/socket: Upgrade dependency "ws" to version 7 to avoid potential
  security problems.

## [0.25.6] - 2021-07-26

### Fixed

- @honsop/stargate: Fix types `AminoMsgTransfer` and `AminoHeight` as well as
  the encoding of `MsgTransfer` for Amino signing.

## [0.25.5] - 2021-06-23

### Added

- @honsop/tendermint-rpc: `Tendermint34Client.blockSearch` and
  `Tendermint34Client.blockSearchAll` were added to allow searching blocks in
  Tendermint 0.34.9+ backends. This is a backport of [#815]. Note: Decoding
  blocks of height 1 is unsupported. This is fixed in [#815] and will be
  released as part of CosmJS 0.26.

[#815]: https://github.com/cosmos/cosmjs/pull/815

## [0.25.4] - 2021-05-31

### Fixed

- @honsop/socket: Upgrade dependency "ws" to version 7 to avoid potential
  security problems.

## [0.25.3] - 2021-05-18

### Fixed

- @honsop/cosmwasm-stargate, @honsop/stargate: Fix error propagation in
  `CosmWasmClient.broadcastTx` and `StargateClient.broadcastTx` ([#800]). This
  bug was introduced with the switch from broadcast mode "commit" to "sync" in
  version 0.25.0.
- @honsop/launchpad, @honsop/stargate: Avoid the use of named capture groups in
  `GasPrice.fromString` to restore ES2017 compatibility and make the library
  work with Hermes ([#801]; thanks [@AlexBHarley]).
- @honsop/launchpad: Adapt `GasPrice.fromString` denom pattern to Cosmos SDK
  0.39 rules: reduce denom length to 16 and allow digits in denom.
- @honsop/stargate: Adapt `GasPrice.fromString` denom pattern to Cosmos SDK 0.42
  rules: allow lengths up to 128, allow upper case letters and digits.

[#800]: https://github.com/cosmos/cosmjs/issues/800
[#801]: https://github.com/cosmos/cosmjs/issues/801
[@alexbharley]: https://github.com/AlexBHarley

## [0.25.2] - 2021-05-11

### Added

- @honsop/cosmwasm-stargate: Add `broadcastTimeoutMs` and
  `broadcastPollIntervalMs` options added to `SigningCosmWasmClientOptions`.
- @honsop/proto-signing: Add `serialize` and `serializeWithEncryptionKey`
  methods to `DirectSecp256k1HdWallet`. Also add `deserialize` and
  `deserializeWithEncryptionKey` static methods.
- @honsop/proto-signing: Export `extractKdfConfiguration` and `executeKdf`
  helper functions and `KdfConfiguration` type.
- @honsop/proto-signing: Export `makeCosmoshubPath` helper.
- @honsop/stargate: Export `makeCosmoshubPath` helper.
- @honsop/stargate: Add `broadcastTimeoutMs` and `broadcastPollIntervalMs`
  options added to `SigningStargateClientOptions`.

## [0.25.1] - 2021-05-06

### Added

- @honsop/cosmwasm-stargate: Export types `Code`, `CodeDetails`, `Contract`,
  `ContractCodeHistoryEntry` and `JsonObject` which are response types of
  `CosmWasmClient` methods. Export types `ChangeAdminResult`, `ExecuteResult`,
  `InstantiateOptions`, `InstantiateResult`, `MigrateResult`, `UploadMeta` and
  `UploadResult` which are argument or response types of `SigningCosmWasmClient`
  methods.

### Fixed

- @honsop/cosmwasm-stargate: Use `CosmWasmFeeTable` instead of `CosmosFeeTable`
  in `SigningCosmWasmClientOptions`; export type `CosmWasmFeeTable`.
- @honsop/amino, @honsop/cli, @honsop/ledger-amino, @honsop/proto-signing: Fix
  runtime error caused by passing explicitly undefined options.

## [0.25.0] - 2021-05-05

### Added

- @honsop/cosmwasm-launchpad: Expose `SigningCosmWasmClient.fees`.
- @honsop/cosmwasm-stargate: Expose `SigningCosmWasmClient.fees` and
  `SigningCosmWasmClient.registry`.
- @honsop/launchpad: Expose `SigningCosmosClient.fees`.
- @honsop/stargate: Expose `SigningStargateClient.fees` and
  `SigningStargateClient.registry`.
- @honsop/stargate: Add support for different account types in `accountFromAny`
  and `StargateClient`. Added `ModuleAccount` and vesting accounts
  `BaseVestingAccount`, `ContinuousVestingAccount`, `DelayedVestingAccount` and
  `PeriodicVestingAccount`.
- @honsop/stargate: Add codecs for IBC channel tx, client query/tx, and
  connection tx, as well as Tendermint.
- @honsop/stargate: Add support for IBC message types in
  `SigningStargateClient`.
- @honsop/stargate: Added new `logs` export with all the functionality from
  @honsop/launchpad.
- @honsop/stargate: Added new `Coin`, `coin`, `coins` and `parseCoins` exports
  which have the same functionality as already existed in @honsop/launchpad.
- @honsop/amino: New package created that contains the shared amino signing
  functionality for @honsop/launchpad and @honsop/stargate.
- @honsop/amino: Split public key interfaces into `Pubkey`, `SinglePubkey` and
  `Secp256k1Pubkey` where `Pubkey` is a generalization of the old `PubKey` that
  supported nested pubkeys for multisig. `SinglePubkey` is the old `PubKey` in
  which the `value` is a base64 encoded string. And `Secp256k1Pubkey` is a
  single secp256k1 pubkey.
- @honsop/utils: The new `arrayContentStartsWith` works similar to
  `arrayContentEquals` but only checks the start of an array.
- @honsop/proto-signing: Added new `Coin`, `coin`, `coins` and `parseCoins`
  exports which have the same functionality as already existed in
  @honsop/launchpad.
- @honsop/stargate: Add `SigningStargateClient.sign`, which allows you to create
  signed transactions without broadcasting them directly. The new type
  `SignerData` can be passed into `.sign` to skip querying account number,
  sequence and chain ID
- @honsop/cosmwasm-stargate: Add `SigningCosmWasmClient.sign`, which allows you
  to create signed transactions without broadcasting them directly. The new type
  `SignerData` from @honsop/stargate can be passed into `.sign` to skip querying
  account number, sequence and chain ID.
- @honsop/stargate: Add constructor `SigningStargateClient.offline` which does
  not connect to Tendermint. This allows offline signing.
- @honsop/stargate: Add `makeMultisignedTx` which allows you to assemble a
  transaction signed by a multisig account.
- @honsop/stargate: Add `delegateTokens`, `undelegateTokens` and
  `withdrawRewards` methods to `SigningStargateClient`.
- @honsop/stargate: Export `defaultGasLimits` and `defaultGasPrice`.
- @honsop/cosmwasm-stargate: Export `defaultGasLimits`.
- @honsop/stargate: `SigningStargateClient` constructor is now `protected`.
- @honsop/cosmwasm-stargate: `SigningCosmWasmClient` constructor is now
  `protected`.
- @honsop/cosmwasm-stargate: Add `SigningCosmWasmClient.offline` static method
  for constructing offline clients without a Tendermint client.
- @honsop/stargate: Add `SigningStargateClient.sendIbcTokens` method.
- @honsop/amino: Export `Secp256k1HdWalletOptions` interface.
- @honsop/amino: Add `bip39Password` option to `Secp256k1HdWallet` options.
- @honsop/proto-signing: Export `DirectSecp256k1HdWalletOptions` interface.
- @honsop/proto-signing: Add `bip39Password` option to `DirectSecp256k1HdWallet`
  options.
- @honsop/amino: Add `rawEd25519PubkeyToRawAddress` helper function.
- @honsop/tendermint-rpc: Add `pubkeyToAddress`, `pubkeyToRawAddress`,
  `rawEd25519PubkeyToRawAddress`, and `rawSecp256k1PubkeyToRawAddress` helper
  functions.
- @honsop/stargate: `StargateClient.broadcastTx` and `.getTx` results now
  include `gasUsed` and `gasWanted` properties.
- @honsop/cosmwasm-stargate: `CosmWasmClient.broadcastTx` and `.getTx` results
  now include `gasUsed` and `gasWanted` properties.
- @honsop/proto-signing: Export `DecodeObject` and `TxBodyEncodeObject`
  interfaces as well as `isTxBodyEncodeObject` helper function.
- @honsop/stargate: Add `MsgDelegateEncodeObject`, `MsgSendEncodeObject`,
  `MsgTransferEncodeObject`, `MsgUndelegateEncodeObject` and
  `MsgWithdrawDelegatorRewardEncodeObject` interfaces as well as
  `isMsgDelegateEncodeObject` etc helpers.
- @honsop/cosmwasm-stargate: Add `MsgClearAdminEncodeObject`,
  `MsgExecuteContractEncodeObject`, `MsgInstantiateContractEncodeObject`,
  `MsgMigrateContractEncodeObject`, `MsgStoreCodeEncodeObject` and
  `MsgUpdateAdminEncodeObject` interfaces as well as
  `isMsgClearAdminEncodeObject` etc helpers.
- @honsop/stargate: Add transfer queries codec, as well as transfer query
  methods to IBC query extension.
- @honsop/tendermint-rpc: Export `ValidatorSecp256k1Pubkey` interface.
- @honsop/proto-signing: Add transaction decoder `decodeTxRaw` for decoding
  transaction bytes returned by Tendermint (e.g. in `IndexedTx.tx`).

### Changed

- @honsop/cosmwasm-stargate: Codec adapted to support wasmd 0.16. Older versions
  of wasmd are not supported anymore.
- @honsop/stargate: Let `AuthExtension.account` and
  `AuthExtension.unverified.account` return an account of type `Any`. This makes
  the caller responsible for decoding the type.
- @honsop/stargate: Remove `accountFromProto` in favour of `accountFromAny`.
- @honsop/stargate: Rename `Rpc` interface to `ProtobufRpcClient` and
  `createRpc` to `createProtobufRpcClient`.
- @honsop/stargate: Reorganize nesting structure of IBC query client and add
  support for more methods.
- @honsop/tendermint-rpc: The fields `CommitSignature.validatorAddress`,
  `.timestamp` and `.signature` are now optional. They are unset when
  `blockIdFlag` is `BlockIdFlag.Absent`. The decoding into `CommitSignature` is
  only updated for the class `Tendermint34Client`, not for `Client`. Please
  migrate to the former.
- @honsop/launchpad: `rawSecp256k1PubkeyToAddress` was removed. Instead use
  `Bech32.encode(prefix, rawSecp256k1PubkeyToRawAddress(pubkeyRaw))` with
  `rawSecp256k1PubkeyToRawAddress` from @honsop/amino.
- @honsop/stargate: `parseRawLog` is now nested under the `logs` export.
- @honsop/stargate: Query extensions now have unverified queries at the root and
  verified queries nested under `.verified`.
- @honsop/cosmwasm-stargate: `wasm` extension now has unverified queries at the
  root.
- @honsop/stargate: `StargateClient.getAccount` now uses an unverified query and
  `StargateClient.getAccountUnverified` has been removed.
  `StargateClient.getAccountVerified` has been added, which performs a verified
  query.
- @honsop/cosmwasm-stargate: `CosmWasmClient.getAccount` now uses an unverified
  query and `CosmWasmClient.getAccountUnverified` has been removed.
  `CosmWasmClient.getAccountVerified` has been added, which performs a verified
  query.
- @honsop/stargate: `StargateClient.getSequence` now rejects if the account is
  not found, instead of returning null.
- @honsop/stargate: `StargateClient.getBalance` now returns a 0 balance instead
  of null.
- @honsop/stargate: `StargateClient.getAllBalancesUnverified` has been renamed
  `.getAllBalances`.
- @honsop/cosmwasm-stargate: `CosmWasmClient.getSequence` now rejects if the
  account is not found, instead of returning null.
- @honsop/cosmwasm-stargate: `CosmWasmClient.getBalance` now returns a 0 balance
  instead of null.
- @honsop/amino: Options for `Secp256k1HdWallet.fromMnemonic` are now passed via
  a `Secp256k1HdWalletOptions` object.
- @honsop/proto-signing: Options for `DirectSecp256k1HdWallet.fromMnemonic` are
  now passed via a `DirectSecp256k1HdWalletOptions` object.
- @honsop/stargate: `StargateClient.broadcastTx` now uses sync mode and then
  polls for the transaction before resolving. The timeout and poll interval can
  be configured.
- @honsop/cosmwasm-stargate: `CosmWasmClient.broadcastTx` now uses sync mode and
  then polls for the transaction before resolving. The timeout and poll interval
  can be configured.
- @honsop/tendermint-rpc: Tendermint v34 `TxData` type now includes `codeSpace`,
  `gasWanted`, and `gasUsed` properties.
- @honsop/amino: `Secp256k1HdWallet.fromMnemonic` now accepts a
  `Secp256k1HdWalletOptions` argument which includes an array of `hdPaths`
  instead of a single `hdPath`. `Secp256k1HdWallet.generate` now also accepts
  options via this interface. This adds support for multiple accounts from the
  same mnemonic to `Secp256k1HdWallet`.
- @honsop/proto-signing: `DirectSecp256k1HdWallet.fromMnemonic` now accepts a
  `DirectSecp256k1HdWalletOptions` argument which includes an array of `hdPaths`
  instead of a single `hdPath`. `DirectSecp256k1HdWallet.generate` now also
  accepts options via this interface. This adds support for multiple accounts
  from the same mnemonic to `DirectSecp256k1HdWallet`.
- @honsop/tendermint-rpc: `ValidatorPubkey` is now a union of
  `ValidatorEd25519Pubkey` and the newly exported `ValidatorSecp256k1Pubkey`
  interface.
- @honsop/tendermint-rpc: `decodePubkey` now supports secp256k1 public keys.

### Deprecated

- @honsop/tendermint-rpc: `Client` has been deprecated. Launchpad applications
  do not need a Tendermint RPC client and Stargate applications should use
  `Tendermint34Client`.

### Removed

- @honsop/stargate: `coinFromProto` helper has been removed as it is no longer
  needed after the `ts-proto` migration.

## [0.24.1] - 2021-03-12

CHANGELOG entries missing. Please see [the diff][0.24.1].

## [0.24.0] - 2021-03-11

- @honsop/cosmwasm: This package is now deprecated. The same functionality is
  now available in @honsop/cosmwasm-launchpad.
- @honsop/cosmwasm: `logs` is no longer exported. Use `logs` from
  @honsop/launchpad instead.
- @honsop/cosmwasm: Export `JsonObject`, `ChangeAdminResult` and `WasmData`
  types as well as `isValidBuilder` and `parseWasmData` functions.
- @honsop/cosmwasm: Add `CosmWasmClient.getTx` method for searching by ID and
  remove such functionality from `CosmWasmClient.searchTx`.
- @honsop/cosmwasm: Rename `SigningCosmWasmClient.senderAddress` to
  `.signerAddress`.
- @honsop/cosmwasm-stargate: Add new package for CosmWasm Stargate support.
- @honsop/crypto: Change `Secp256k1Keypair` from tagged type to simple
  interface.
- @honsop/launchpad: Add `Secp256k1Wallet` to manage a single raw secp256k1
  keypair.
- @honsop/launchpad: `OfflineSigner` type’s `sign` method renamed `signAmino`
  and `SignResponse` type renamed `AminoSignResponse`.
- @honsop/launchpad: `Secp256k1HdWallet.sign` method renamed `signAmino`.
- @honsop/launchpad: Add `CosmosClient.getTx` method for searching by ID and
  remove such functionality from `CosmosClient.searchTx`.
- @honsop/launchpad: Add `SigningCosmosClient.sign` method for signing without
  broadcasting.
- @honsop/launchpad: Add `SigningCosmosClient.appendSignature` method creating
  transactions with multiple signatures.
- @honsop/launchpad: Add support for undefined memo in `makeSignDoc`.
- @honsop/launchpad: Rename `SigningCosmosClient.senderAddress` to
  `.signerAddress`.
- @honsop/proto-signing: Add new package for handling transaction signing with
  protobuf encoding.
- @honsop/proto-signing: Expose `DirectSignResponse` interface.
- @honsop/stargate: Add new package for Cosmos SDK Stargate support.
- @honsop/tendermint-rpc: Make `Client.detectVersion` private and let it return
  a version instead of a client.
- @honsop/tendermint-rpc: Make the constructor of `Client` private. Add
  `Client.create` for creating a Tendermint client given an RPC client and an
  optional adaptor.
- @honsop/tendermint-rpc: Add an optional adaptor argument to `Client.connect`
  which allows skipping the auto-detection.
- @honsop/tendermint-rpc: Remove export `v0_33` in favour of `adaptor33` and
  `adaptor34`. Export the `Adaptor` type.
- @honsop/tendermint-rpc: Export `DateTime` class.
- @honsop/tendermint-rpc: Remove types `QueryString`, `Base64String`,
  `HexString`, `IntegerString` and `IpPortString`. Use `string` instead.
- @honsop/tendermint-rpc: Remove types `BlockHash`, `TxBytes` and `TxHash`. Use
  `Uint8Array` instead.

### Added

- @honsop/launchpad: Export distribution module msg types
  `MsgFundCommunityPool`, `MsgSetWithdrawAddress`, `MsgWithdrawDelegatorReward`,
  `MsgWithdrawValidatorCommission` and type checker helper functions.
- @honsop/utils: Added `assertDefinedAndNotNull`.
- @honsop/tendermint-rpc: The new `Tendermint34Client` is a copy of the old
  `Client` but without the automatic version detection. Its usage is encouraged
  over `Client` if you connect to a Tendermint 0.34 backend.

### Changed

- @honsop/encoding: Change return type of `fromRfc3339` from `ReadonlyDate` to
  `Date` as the caller becomes the owner of the object and can safely mutate it
  in any way.
- @honsop/launchpad-ledger: Renamed to @honsop/ledger-amino.
- @honsop/ledger-amino: `LedgerSigner.sign` method renamed `signAmino`.

### Deprecated

- @honsop/tendermint-rpc: Deprecate `DateTime` in favour of the free functions
  `fromRfc3339WithNanoseconds` and `toRfc3339WithNanoseconds`.

## 0.23.2 (2021-01-06)

### Security

- @honsop/cli: Update vulnerable axios dependency.
- @honsop/faucet-client: Update vulnerable axios dependency.
- @honsop/launchpad: Update vulnerable axios dependency.
- @honsop/tendermint-rpc: Update vulnerable axios dependency.

## 0.23.1 (2020-10-27)

- @honsop/crypto: Export new convenience functions `keccak256`, `ripemd160`,
  `sha1`, `sha256` and `sha512`.
- @honsop/faucet-client: Add new package which exports `FaucetClient` class.

## 0.23.0 (2020-10-09)

- @honsop/cli: Expose `HdPath` type.
- @honsop/cosmwasm: Rename `CosmWasmClient.postTx` method to `.broadcastTx`.
- @honsop/cosmwasm: Rename `FeeTable` type to `CosmWasmFeeTable`.
- @honsop/cosmwasm: `SigningCosmWasmClient` constructor now takes optional
  arguments `gasPrice` and `gasLimits` instead of `customFees` for easier
  customization.
- @honsop/cosmwasm: Rename `SigningCosmWasmClient.signAndPost` method to
  `.signAndBroadcast`.
- @honsop/cosmwasm: Use stricter type `Record<string, unknown>` for smart query,
  init, migrate and handle messages (in `WasmExtension.wasm.queryContractSmart`,
  `CosmWasmClient.queryContractSmart`, `SigningCosmWasmClient.instantiate`,
  `SigningCosmWasmClient.migrate`, `SigningCosmWasmClient.execute`).
- @honsop/crypto: Export new type alias `HdPath`.
- @honsop/crypto: Add `Secp256k1Signature.toFixedLength` method.
- @honsop/demo-staking: Remove package and supporting scripts.
- @honsop/encoding: Add `limit` parameter to `Bech32.encode` and `.decode`. The
  new default limit for decoding is infinity (was 90 before). Set it to 90 to
  create a strict decoder.
- @honsop/faucet: Environmental variable `FAUCET_FEE` renamed to
  `FAUCET_GAS_PRICE` and now only accepts one token. Environmental variable
  `FAUCET_GAS` renamed to `FAUCET_GAS_LIMIT`.
- @honsop/faucet: `/credit` API now expects `denom` (base token) instead of
  `ticker` (unit token). Environmental variables specifying credit amounts now
  need to use uppercase denom.
- @honsop/launchpad: Rename `FeeTable` type to `CosmosFeeTable` and export a new
  more generic type `FeeTable`.
- @honsop/launchpad: Add new class `GasPrice`, new helper type `GasLimits` and
  new helper function `buildFeeTable` for easier handling of gas prices and
  fees.
- @honsop/launchpad: Rename `CosmosClient.postTx` method to `.broadcastTx`.
- @honsop/launchpad: `SigningCosmosClient` constructor now takes optional
  arguments `gasPrice` and `gasLimits` instead of `customFees` for easier
  customization.
- @honsop/launchpad: Rename `SigningCosmosClient.signAndPost` method to
  `.signAndBroadcast`.
- @honsop/launchpad: Rename `PostTx`-related types to `BroadcastTxResult`,
  `BroadcastTxSuccess` and `BroadcastTxFailure` respectively, as well as helper
  functions `isBroadcastTxFailure`, `isBroadcastTxSuccess` and
  `assertIsBroadcastTxSuccess`.
- @honsop/launchpad: Export `isSearchByIdQuery`, `isSearchByHeightQuery`,
  `isSearchBySentFromOrToQuery` and `isSearchByTagsQuery`.
- @honsop/launchpad: Change type of `TxsResponse.logs` and
  `BroadcastTxsResponse.logs` to `unknown[]`.
- @honsop/launchpad: Export `StdSignDoc` and create helpers to make and
  serialize a `StdSignDoc`: `makeSignDoc` and `serializeSignDoc`.
- @honsop/launchpad: Let `OfflineSigner.sign` take an `StdSignDoc` instead of an
  encoded message and return a `SignResponse` that includes the document which
  was signed.
- @honsop/launchpad: Remove `PrehashType` and the prehash type argument in
  `OfflineSigner.sign` because the signer now needs to know how to serialize an
  `StdSignDoc`.
- @honsop/launchpad: Remove `makeSignBytes` in favour of `makeSignDoc` and
  `serializeSignDoc`.
- @honsop/launchpad: Create `WrappedTx`, `WrappedStdTx` and `isWrappedStdTx` to
  better represent the Amino tx interface. Deprecate `CosmosSdkTx`, which is an
  alias for `WrappedStdTx`.
- @honsop/launchpad: Add `makeStdTx` to create an `StdTx`.
- @honsop/launchpad: Rename `Secp256k1Wallet` to `Secp256k1HdWallet`. Later on,
  we'll use `Secp256k1Wallet` for single key wallets.
- @honsop/launchpad-ledger: Add package supporting Ledger device integration for
  Launchpad. Two new classes are provided: `LedgerSigner` (for most use cases)
  and `LaunchpadLedger` for more fine-grained access.
- @honsop/math: Add `.multiply` method to `Decimal` class.
- @honsop/math: Deprecate `Uint32.fromBigEndianBytes` in favour of
  `Uint32.fromBytes`, which supports both big and little endian.
- @honsop/math: Deprecate `Uint64.fromBytesBigEndian` in favour of
  `Uint64.fromBytes`, which supports both big and little endian.
- @honsop/math: Add `Uint32.fromString`.
- @honsop/tendermint-rpc: Make `BroadcastTxCommitResponse.height` non-optional.
- @honsop/tendermint-rpc: Make `TxProof.proof.leafHash` non-optional because it
  is always set.
- @honsop/tendermint-rpc: Change type of `GenesisResponse.appState` to
  `Record<string, unknown> | undefined`.
- @honsop/tendermint-rpc: Remove obsolete `TxData.tags` and make `TxData.events`
  non-optional. Rename `Tag` to `Attribute`.
- @honsop/tendermint-rpc: Remove obsolete `BlockResultsResponse.beginBlock` and
  `.beginBlock`. The new `.beginBlockEvents` and `.endBlockEvents` now parse the
  events correctly.
- @honsop/tendermint-rpc: Remove trivial helpers `getTxEventHeight`,
  `getHeaderEventHeight` and `getBlockEventHeight` because they don't do
  anything else than accessing an object member.
- @honsop/tendermint-rpc: Add support for connecting to Tendermint RPC 0.34.
- @honsop/tendermint-rpc: Make `TxEvent.index` optional and deprecate it because
  it is not set anymore in Tendermint 0.34.
- @honsop/utils: Add `assertDefined`.
- @honsop/faucet: Rename binary from `cosmwasm-faucet` to `cosmos-faucet`.

## 0.22.3 (2020-09-15)

- @honsop/math: Add `Decimal.minus`.

## 0.22.2 (2020-08-11)

- @honsop/faucet: Log errors for failed send transactions.
- @honsop/faucet: Add config variable `FAUCET_MEMO`.
- @honsop/faucet: Add config variables `FAUCET_FEE` and `FAUCET_GAS`.
- @honsop/launchpad: Add `parseCoins` helper.

## 0.22.1 (2020-08-11)

- @honsop/cli: Import `encodeAminoPubkey`, `encodeBech32Pubkey`,
  `decodeAminoPubkey` and `decodeBech32Pubkey` by default.
- @honsop/launchpad: Add ed25519 support to `encodeBech32Pubkey`.
- @honsop/launchpad: Add `encodeAminoPubkey` and `decodeAminoPubkey`.
- @honsop/utils: Add `arrayContentEquals`.
- @honsop/faucet: Add config variables `FAUCET_ADDRESS_PREFIX` and
  `FAUCET_TOKENS`.
- @honsop/faucet: Remove broken chain ID from `cosmwasm-faucet generate`.

## 0.22.0 (2020-08-03)

- @honsop/cli: Now supports HTTPs URLs for `--init` code sources.
- @honsop/cli: Now supports adding code directly via `--code`.
- @honsop/cosmwasm: Rename `CosmWasmClient.getNonce` method to `.getSequence`.
- @honsop/cosmwasm: Remove `RestClient` class in favour of new modular
  `LcdClient` class from @honsop/sdk38.
- @honsop/cosmwasm: Add `SigningCosmWasmClient.signAndPost` as a mid-level
  abstraction between `SigningCosmWasmClient.upload`/`.instantiate`/`.execute`
  and `.postTx`.
- @honsop/cosmwasm: Use `*PostTx*` types and helpers from @honsop/sdk38. Remove
  exported `PostTxResult`.
- @honsop/cosmwasm: `ContractDetails` was removed in favour of just `Contract`.
  The missing `init_msg` is now available via the contract's code history (see
  `getContractCodeHistory`).
- @honsop/cosmwasm: Remove `SigningCallback` in favour of the `OfflineSigner`
  interface.
- @honsop/sdk38: Rename `CosmosClient.getNonce` method to `.getSequence`.
- @honsop/sdk38: Remove `RestClient` class in favour of new modular `LcdClient`
  class.
- @honsop/sdk38: Remove `Pen` type in favour of `OfflineSigner` and remove
  `Secp256k1Pen` class in favour of `Secp256k1Wallet` which takes an
  `OfflineSigner` instead of a `SigningCallback`.
- @honsop/sdk38: Rename `CosmosSdkAccount` to `BaseAccount` and export the type.
- @honsop/sdk38: `BaseAccount` now uses `number | string` as the type for
  `account_number` and `sequence`. The new helpers `uint64ToNumber` and
  `uint64ToString` allow you to normalize the mixed input.
- @honsop/sdk38: `BaseAccount` now uses `string | PubKey | null` as the type for
  `public_key`. The new helper `normalizePubkey` allows you to normalize the
  mixed input.
- @honsop/math: Add missing integer check to `Uint64.fromNumber`. Before
  `Uint64.fromNumber(1.1)` produced some result.
- @honsop/sdk38: Add `SigningCosmosClient.signAndPost` as a mid-level
  abstraction between `SigningCosmosClient.sendTokens` and `.postTx`.
- @honsop/sdk38: Export `PostTxFailure`/`PostTxSuccess` and type checkers
  `isPostTxFailure`/`isPostTxSuccess`; export `assertIsPostTxSuccess`.
- @honsop/sdk38: `Secp256k1Wallet`s can now be generated randomly with
  `Secp256k1Wallet.generate(n)` where `n` is 12, 15, 18, 21 or 24 mnemonic
  words.
- @honsop/sdk38: The new `Secp256k1Wallet.serialize` and `.deserialize` allow
  encrypted serialization of the wallet.
- @honsop/sdk38: Remove the obsolete `upload`, `init`, `exec` properties from
  `FeeTable`. @honsop/cosmwasm has its own `FeeTable` with those properties.
- @honsop/sdk38: Rename package to @honsop/launchpad.

[unreleased]: https://github.com/cosmos/cosmjs/compare/v0.28.7...HEAD
[0.28.7]: https://github.com/cosmos/cosmjs/compare/v0.28.6...v0.28.7
[0.28.6]: https://github.com/cosmos/cosmjs/compare/v0.28.5...v0.28.6
[0.28.5]: https://github.com/cosmos/cosmjs/compare/v0.28.4...v0.28.5
[0.28.4]: https://github.com/cosmos/cosmjs/compare/v0.28.3...v0.28.4
[0.28.3]: https://github.com/cosmos/cosmjs/compare/v0.28.2...v0.28.3
[0.28.2]: https://github.com/cosmos/cosmjs/compare/v0.28.1...v0.28.2
[0.28.1]: https://github.com/cosmos/cosmjs/compare/v0.28.0...v0.28.1
[0.28.0]: https://github.com/cosmos/cosmjs/compare/v0.27.1...v0.28.0
[0.27.1]: https://github.com/cosmos/cosmjs/compare/v0.27.0...v0.27.1
[0.27.0]: https://github.com/cosmos/cosmjs/compare/v0.26.6...v0.27.0
[0.26.6]: https://github.com/cosmos/cosmjs/compare/v0.26.5...v0.26.6
[0.26.5]: https://github.com/cosmos/cosmjs/compare/v0.26.4...v0.26.5
[0.26.4]: https://github.com/cosmos/cosmjs/compare/v0.26.3...v0.26.4
[0.26.3]: https://github.com/cosmos/cosmjs/compare/v0.26.2...v0.26.3
[0.26.2]: https://github.com/cosmos/cosmjs/compare/v0.26.1...v0.26.2
[0.26.1]: https://github.com/cosmos/cosmjs/compare/v0.26.0...v0.26.1
[0.26.0]: https://github.com/cosmos/cosmjs/compare/v0.25.6...v0.26.0
[0.25.6]: https://github.com/cosmos/cosmjs/compare/v0.25.5...v0.25.6
[0.25.5]: https://github.com/cosmos/cosmjs/compare/v0.25.4...v0.25.5
[0.25.4]: https://github.com/cosmos/cosmjs/compare/v0.25.3...v0.25.4
[0.25.3]: https://github.com/cosmos/cosmjs/compare/v0.25.2...v0.25.3
[0.25.2]: https://github.com/cosmos/cosmjs/compare/v0.25.1...v0.25.2
[0.25.1]: https://github.com/cosmos/cosmjs/compare/v0.25.0...v0.25.1
[0.25.0]: https://github.com/cosmos/cosmjs/compare/v0.24.1...v0.25.0
[0.24.1]: https://github.com/cosmos/cosmjs/compare/v0.24.0...v0.24.1
[0.24.0]: https://github.com/cosmos/cosmjs/compare/v0.23.0...v0.24.0
