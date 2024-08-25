

export interface ListData {

    id?: string,
    isUpdate?:boolean ,
    isNewParson?:boolean ,
    designation?: string,
    organization?: string,
    mobileNumber?: string,
    email?: string,
    orgWebURL?: string,
    phoneNumber?: string,
    orgWebUrl?: string,
    personTypeBean?: {
      id: string;
      value: string;
    }
    personNameBean?: {
      id: string;
      value: string;
    }
    personNameBeangenderBean?: {
      id: string;
      value: string;
    };
    genderBean?: {
      id: string;
      value: string;
    };
    personTotalPayableAmount?:number
    modeOfPaymentBean?:{
      id?: string;
      value?: string;
    }

    personSessionNum?: string,
    revenueStampAmount?: string,
    netPayable?: string,
    noOfSessions?:string
    vatAmount?:string
    taxAmount?:string
    mfsNumber?: string,
    totalAmount?: string,

}
