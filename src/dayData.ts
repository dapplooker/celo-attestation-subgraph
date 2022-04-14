/* eslint-disable prefer-const */
import {
    BigDecimal,
    BigInt
} from "@graphprotocol/graph-ts";
import {AttestationDayData} from "../generated/schema";
import {COMPLETED_ATTESTATION, ONE_BD, REQUESTED_ATTESTATION, ZERO_BD} from "./constants";


export function updateDayData(eventType: string, gasConsumed: BigDecimal, updateTimestamp: BigInt): void {
    let timestamp = updateTimestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;
    // @ts-ignore
    let dayDataID = dayStartTimestamp.toString().concat("-").concat(eventType);

    let attestationDayData = AttestationDayData.load(dayDataID);
    if (attestationDayData === null) {
        attestationDayData = new AttestationDayData(dayDataID);
        attestationDayData.attestationCompletedGasConsumed = ZERO_BD;
        attestationDayData.attestationRequestedGasConsumed = ZERO_BD;
        attestationDayData.attestationRequestedCount = ZERO_BD;
        attestationDayData.attestationCompletedCount = ZERO_BD;
    }

    attestationDayData.lastUpdatedTimestamp = updateTimestamp
    if (eventType === REQUESTED_ATTESTATION) {
        attestationDayData.attestationRequestedCount.plus(ONE_BD)
        attestationDayData.attestationRequestedGasConsumed.plus(gasConsumed)
    } else if(eventType === COMPLETED_ATTESTATION){
        attestationDayData.attestationCompletedCount.plus(ONE_BD)
        attestationDayData.attestationCompletedGasConsumed.plus(gasConsumed)
    } else {
        attestationDayData.attestationIssuerSelectedCount.plus(ONE_BD)
        attestationDayData.attestationIssuerSelectedGasConsumed.plus(gasConsumed)
    }
    attestationDayData.save();
}
