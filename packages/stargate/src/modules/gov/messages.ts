import { EncodeObject, GeneratedType } from "@honsop/proto-signing";
import { MsgDeposit, MsgSubmitProposal, MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";

export const govTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
];

export interface MsgDepositEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  readonly value: Partial<MsgDeposit>;
}

export function isMsgDepositEncodeObject(object: EncodeObject): object is MsgSubmitProposalEncodeObject {
  return (object as MsgDepositEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}

export interface MsgSubmitProposalEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  readonly value: Partial<MsgSubmitProposal>;
}

export function isMsgSubmitProposalEncodeObject(
  object: EncodeObject,
): object is MsgSubmitProposalEncodeObject {
  return (object as MsgSubmitProposalEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}

export interface MsgVoteEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  readonly value: Partial<MsgVote>;
}

export function isMsgVoteEncodeObject(object: EncodeObject): object is MsgVoteEncodeObject {
  return (object as MsgVoteEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}
