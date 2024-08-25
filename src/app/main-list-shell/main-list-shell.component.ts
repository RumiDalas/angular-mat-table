import { Component, OnInit, signal } from '@angular/core';
import { ListData } from '../model/list.model';

@Component({
  selector: 'app-main-list-shell',
  templateUrl: './main-list-shell.component.html',
  styleUrls: ['./main-list-shell.component.scss']
})
export class MainListShellComponent  implements OnInit{


  eventPaymentDetailslistData = signal<ListData[]>([]);

 testOb:ListData[]=[{

        isUpdate: false,
        isNewParson: false,
        personTypeBean: {"id":"INTERNAL","value":"a2i"},
        genderBean: {
          "id": "MALE",
          "value": "Male"
       },
        personNameBean: {
            "id": "69",
            "value": "MD Saddam  Hossain Majumder",
         },
        designation: "Finance Expert",
        organization: "a2i",
        phoneNumber: "01716422362",
        email: "md.habibullah@a2i.gov.bd",
        orgWebUrl: "https://erp.a2i.gov.bd/",

       modeOfPaymentBean: {"id":"CASH","value":"Cash"},
        mfsNumber: "",
        noOfSessions: "5",
        totalAmount: "555",
        revenueStampAmount: "5",
        vatAmount: "5",
        taxAmount: "5",
        netPayable: "540.00"

    }]

    testOb1:ListData[]=[{

      isUpdate: false,
      isNewParson: false,
      personTypeBean: {"id":"INTERNAL","value":"a2i"},
      genderBean: {
        "id": "MALE",
        "value": "Male"
     },
      personNameBean: {
          "id": "69",
          "value": "Dalas",
       },
      designation: "Finance Expert",
      organization: "a2i",
      phoneNumber: "01716422362",
      email: "md.habibullah@a2i.gov.bd",
      orgWebUrl: "https://erp.a2i.gov.bd/",

     modeOfPaymentBean: {"id":"CASH","value":"Cash"},
      mfsNumber: "",
      noOfSessions: "6",
      totalAmount: "555",
      revenueStampAmount: "5",
      vatAmount: "5",
      taxAmount: "5",
      netPayable: "540.00"

  }]
  ngOnInit(): void {
    this.eventPaymentDetailslistData.set(this.testOb)

  }

  add(){

    this.eventPaymentDetailslistData.set(this.testOb1)

  }

}
