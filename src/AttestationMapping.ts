import { log } from "@graphprotocol/graph-ts";
import {
  AttestationCompleted as AttestationCompletedEvent,
  AttestationIssuerSelected as AttestationIssuerSelectedEvent,
  AttestationRequestFeeSet as AttestationRequestFeeSetEvent,
  AttestationsRequested as AttestationsRequestedEvent,
  SelectIssuersWaitBlocksSet as SelectIssuersWaitBlocksSetEvent
} from "../generated/Attestation/Attestation"
import {} from "../generated/Attestation/Attestation"
import {
  CompletedAttestation as AttestationAttestationCompletedEventSchema,
  IssuerSelected as AttestationAttestationIssuerSelectedEventSchema,
  AttestationFee as AttestationAttestationRequestFeeSetEventSchema,
  RequestedAttestation as AttestationAttestationsRequestedEventSchema,
  IssuersWaitBlock as AttestationSelectIssuersWaitBlocksSetEventSchema,
} from "../generated/schema"
import {} from "../generated/schema"

export function handleAttestationCompletedEvent(
  event: AttestationCompletedEvent
): void {
  log.info("Attestation completed event: Entity address {}", [event.transaction.hash.toHex()]);
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

export function handleAttestationIssuerSelectedEvent(
  event: AttestationIssuerSelectedEvent
): void {
  log.info("Attestation issuer selected: Entity address {}", [event.transaction.hash.toHex()]);
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
  log.info("Attestation request fee set: Entity address {}", [event.transaction.hash.toHex()]);
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
  log.info("Attestation requested: Entity address {}", [event.transaction.hash.toHex()]);
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

export function handleSelectIssuersWaitBlocksSetEvent(
  event: SelectIssuersWaitBlocksSetEvent
): void {
  log.info("Attestation issuer wait block set: Entity address {}", [event.transaction.hash.toHex()]);
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
