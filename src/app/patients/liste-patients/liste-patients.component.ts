import { Component, OnInit } from '@angular/core';

import { Patient } from '../Patient';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { PatientsService } from '../patients.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
providers: [ConfirmationService],
})
export class ListePatientsComponent implements OnInit {

  employees: Employee[];
  msgs: Message[] = [];
  form: FormGroup;
  closeResult = '';
  editPatient: Patient;
  showDetailDialog: boolean;
  displayModal: boolean;
  pageOfItems: Array<any>;
  term: any;



  position: string;

  patients: Patient[] = [
    {
      "cin": "AB",
      "nom": "Marc",
      "prenom": "Lance",
      "dateNaissance": new Date("12/04/2022"),
      "telephone": 923469828,
      "email": "douglas@gmail"





    },
    {
      "cin": "BQ12",
      "nom": "Sam",
      "prenom": "Pace",
      "dateNaissance": new Date("12/04/2022"),
      "telephone": 923469828,
      "email": "douglas@gmail"





    }, {
      "cin": "BHG",
      "nom": "Lucas",
      "prenom": "Faker",
      "dateNaissance": new Date("09/04/2022"),
      "telephone": 923469828,
      "email": "douglas@gmail"





    }, {
      "cin": "OEN",
      "nom": "Rami",
      "prenom": "Malek",
      "dateNaissance": new Date("11/09/2022"),
      "telephone": 923469828,
      "email": "douglas@gmail"





    }, {
      "cin": "BQ12",
      "nom": "Douglas",
      "prenom": "Pace",
      "dateNaissance": new Date("12/12/2012"),
      "telephone": 923469828,
      "email": "douglas@gmail"





    }
  ];


  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig,private modalService: NgbModal,private patientService: PatientsService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.patientService.getEmployees().subscribe(element=>{
      this.employees = element;
    })




  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  confirm1() {
      this.confirmationService.confirm({
          message: 'Êtes-vous sûr de vouloir continuer ?',
          header: 'Confirmation',
          acceptLabel:"Oui",
          rejectLabel:"Non",
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.msgs = [{severity:'success', summary:'Confirmé', detail:'Les données bien supprimé'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Annulé', detail:'Vous avez rejeté votre operation'}];
          }
      });
  }

  open(patient:Patient,content:any) {
    this.editPatient= patient;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.editPatient= patient;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showModalDialog(patient: Patient){
    this.editPatient= patient;
    this.displayModal= true;
    this.showDetailDialog= false;


  }
  onUpdateEmloyee(patient: Patient){

  }

  showDetailPopUp(){
    this.displayModal=false;
    this.showDetailDialog= true;
  }

}
