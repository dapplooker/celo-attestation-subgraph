import {
  AttestationCompleted as AttestationCompletedEvent,
  AttestationExpiryBlocksSet as AttestationExpiryBlocksSetEvent,
  AttestationIssuerSelected as AttestationIssuerSelectedEvent,
  AttestationRequestFeeSet as AttestationRequestFeeSetEvent,
  AttestationsRequested as AttestationsRequestedEvent,
  AttestationsTransferred as AttestationsTransferredEvent,
  MaxAttestationsSet as MaxAttestationsSetEvent,
  RegistrySet as RegistrySetEvent,
  SelectIssuersWaitBlocksSet as SelectIssuersWaitBlocksSetEvent,
  TransferApproval as TransferApprovalEvent,
  Withdrawal as WithdrawalEvent
} from "../generated/Attestation/Attestation"
import {} from "../generated/Attestation/Attestation"
import {
  AttestationAttestationCompletedEvent as AttestationAttestationCompletedEventSchema,
  AttestationAttestationExpiryBlocksSetEvent as AttestationAttestationExpiryBlocksSetEventSchema,
  AttestationAttestationIssuerSelectedEvent as AttestationAttestationIssuerSelectedEventSchema,
  AttestationAttestationRequestFeeSetEvent as AttestationAttestationRequestFeeSetEventSchema,
  AttestationAttestationsRequestedEvent as AttestationAttestationsRequestedEventSchema,
  AttestationAttestationsTransferredEvent as AttestationAttestationsTransferredEventSchema,
  AttestationMaxAttestationsSetEvent as AttestationMaxAttestationsSetEventSchema,
  AttestationRegistrySetEvent as AttestationRegistrySetEventSchema,
  AttestationSelectIssuersWaitBlocksSetEvent as AttestationSelectIssuersWaitBlocksSetEventSchema,
  AttestationTransferApprovalEvent as AttestationTransferApprovalEventSchema,
  AttestationWithdrawalEvent as AttestationWithdrawalEventSchema
} from "../generated/schema"
import {} from "../generated/schema"

export function handleAttestationCompletedEvent(
  event: AttestationCompletedEvent
): void {
  let entity = new AttestationAttestationCompletedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.issuer = event.params.issuer
  entity.save()
}

export function handleAttestationExpiryBlocksSetEvent(
  event: AttestationExpiryBlocksSetEvent
): void {
  let entity = new AttestationAttestationExpiryBlocksSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.value = event.params.value
  entity.save()
}

export function handleAttestationIssuerSelectedEvent(
  event: AttestationIssuerSelectedEvent
): void {
  let entity = new AttestationAttestationIssuerSelectedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.issuer = event.params.issuer
  entity.attestationRequestFeeToken = event.params.attestationRequestFeeToken
  entity.save()
}

export function handleAttestationRequestFeeSetEvent(
  event: AttestationRequestFeeSetEvent
): void {
  let entity = new AttestationAttestationRequestFeeSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.value = event.params.value
  entity.save()
}

export function handleAttestationsRequestedEvent(
  event: AttestationsRequestedEvent
): void {
  let entity = new AttestationAttestationsRequestedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.account = event.params.account
  entity.attestationsRequested = event.params.attestationsRequested
  entity.attestationRequestFeeToken = event.params.attestationRequestFeeToken
  entity.save()
}

export function handleAttestationsTransferredEvent(
  event: AttestationsTransferredEvent
): void {
  let entity = new AttestationAttestationsTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.identifier = event.params.identifier
  entity.fromAccount = event.params.fromAccount
  entity.toAccount = event.params.toAccount
  entity.save()
}

export function handleMaxAttestationsSetEvent(
  event: MaxAttestationsSetEvent
): void {
  let entity = new AttestationMaxAttestationsSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.value = event.params.value
  entity.save()
}

export function handleRegistrySetEvent(event: RegistrySetEvent): void {
  let entity = new AttestationRegistrySetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.registryAddress = event.params.registryAddress
  entity.save()
}

export function handleSelectIssuersWaitBlocksSetEvent(
  event: SelectIssuersWaitBlocksSetEvent
): void {
  let entity = new AttestationSelectIssuersWaitBlocksSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.value = event.params.value
  entity.save()
}

export function handleTransferApprovalEvent(
  event: TransferApprovalEvent
): void {
  let entity = new AttestationTransferApprovalEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.approver = event.params.approver
  entity.indentifier = event.params.indentifier
  entity.from = event.params.from
  entity.to = event.params.to
  entity.approved = event.params.approved
  entity.save()
}

export function handleWithdrawalEvent(event: WithdrawalEvent): void {
  let entity = new AttestationWithdrawalEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txHash = event.transaction.hash
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.valueTransferred = event.transaction.value
  entity.gasUsed = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.blockTimestamp = event.block.timestamp
  entity.account = event.params.account
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}
