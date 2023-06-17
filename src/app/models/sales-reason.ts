export class SalesReason {
    salesReasonId!: number;
    name!: string;
    reasonType!: string;
    modifiedDate!: string;

    constructor() {
        this.salesReasonId = 0;
        this.name = "";
        this.reasonType = "";
        this.modifiedDate = "";
    }
}
