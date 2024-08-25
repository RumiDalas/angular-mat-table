import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListData } from '../model/list.model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit, OnChanges {


  toggleChecker: boolean = false;
  toggledisabe = false;
  attachmentList: any;
  attachmentList2: any;


  id!: string


eventPaymentDetailslistData: ListData[] = [];
@Input() set setEventPaymentDetailslistData(value: ListData[]) {
  // this.eventPaymentDetailslistData.push(value)

  this.eventPaymentDetailslistData =[
    ...this.eventPaymentDetailslistData ,
    ... value


  ]



  console.log('this.eventPaymentDetailslistData',this.eventPaymentDetailslistData);

}

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef
    ) { }


  @Output() addNewTitleEmitter = new EventEmitter<any>();
  @Output() onUpdateParticipantDetails = new EventEmitter<any>()
  @Output() onAddParticipantDetails = new EventEmitter<any>()





  attachmentUploading: boolean = false;
  @Input() set isLoading(value: boolean) {
    this.attachmentUploading = value;
  }




  ngOnInit(): void {


  }


  ngOnChanges(changes: SimpleChanges): void { }

  add(){

  }

  addNewEvent() {
    this.addNewTitleEmitter.emit()
  }

  save() {
    // if (!this.form.valid) {
    //   this.form.markAllAsTouched();
    //   this.messageService.showErrorMessage(
    //     'Required: Please fill up all required field'
    //   );
    //   return;
    // }

    // departureHistoryList---



  }

  draft() {}

  closeForm() {
    this.router.navigate(['event-payment-request'], {
      relativeTo: this.route.parent,
    })
  }





  addNewPersonDetails(){
    this.onAddParticipantDetails.emit()
  }


  update(row: ListData) {
    console.log('row====>', row);
    console.log('eventlist====>', this.eventPaymentDetailslistData);

    const updatedList = this.eventPaymentDetailslistData.filter(item => item.noOfSessions !== row.noOfSessions);

    // Update the data source
    this.eventPaymentDetailslistData = [...updatedList];

    // Manually trigger change detection
    this.cdr.detectChanges();

    console.log('Updated eventlist====>', this.eventPaymentDetailslistData);
}

  getDisplayedColumns(): any {
    return [
      'name',
      'designation',
      'organization',
      'phoneNumber',
      'email',
      // 'webUrl',
      'paymentMethod',
      'payableAmount',
      'revenueAmount',
      'netPayable',
      'vatAmount',
      'taxAmount',
      'action',
    ];
  }




}

const testOb:ListData[]=[{

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

