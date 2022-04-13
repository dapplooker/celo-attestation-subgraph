/* eslint-disable prefer-const */
import {
    BigDecimal,
    BigInt
} from "@graphprotocol/graph-ts";
import {DayData} from "../generated/schema";

export let ZERO_BD = BigDecimal.fromString("0");

export function updateDayData(entityType: string, gasConsumed: BigDecimal, updateTimestamp: BigInt) {
    let timestamp = updateTimestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;
    // @ts-ignore
    let dayDataID = dayStartTimestamp.toString().concat("-").concat(entityType);

    let attestationDayData = DayData.load(dayDataID);
    if (attestationDayData === null) {
        attestationDayData = new DayData(dayDataID);
        attestationDayData.timestamp = dayStartTimestamp;
        attestationDayData.entityType = entityType;
        attestationDayData.dailyGasConsumed = ZERO_BD;
    }

    attestationDayData.lastUpdatedTimestamp = updateTimestamp
    attestationDayData.dailyGasConsumed.plus(gasConsumed)
    attestationDayData.save();
}
