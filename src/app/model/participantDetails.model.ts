

export interface PersonDetails {
  id: string;
  value: string;
  participantDetails: {
    id?: string,
    designation?: string,
    organization?: string,
    mobileNumber?: string,
    email?: string,
    orgWebURL?: string,
    phoneNumber?: string,

    genderBean?: {
      id: string;
      value: string;
    };
    personTotalPayableAmount?:number
    personModeOfPaymentBean:{
      id: string;
      value: string;
    }
    personSessionNum?: number,
    personRevenueStampAmount?: number,
    personNetPayable?: number,
    vatAmount?:number
    taxAmount?:number
    bikashNumber?: string,
  };


}
