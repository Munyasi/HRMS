/* tslint:disable */
import {
  Patient,
  Medicine,
  UserAccount
} from '../index';

declare var Object: any;
export interface PatientMedicineInterface {
  "diagnosis_code": string;
  "id"?: number;
  "patient_id"?: number;
  "medicine_id"?: number;
  "practitioner_id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  patient?: Patient;
  medicine?: Medicine;
  practitioner?: UserAccount;
}

export class PatientMedicine implements PatientMedicineInterface {
  "diagnosis_code": string;
  "id": number;
  "patient_id": number;
  "medicine_id": number;
  "practitioner_id": number;
  "createdAt": Date;
  "updatedAt": Date;
  patient: Patient;
  medicine: Medicine;
  practitioner: UserAccount;
  constructor(data?: PatientMedicineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PatientMedicine`.
   */
  public static getModelName() {
    return "PatientMedicine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PatientMedicine for dynamic purposes.
  **/
  public static factory(data: PatientMedicineInterface): PatientMedicine{
    return new PatientMedicine(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'PatientMedicine',
      plural: 'PatientMedicines',
      path: 'PatientMedicines',
      properties: {
        "diagnosis_code": {
          name: 'diagnosis_code',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "patient_id": {
          name: 'patient_id',
          type: 'number'
        },
        "medicine_id": {
          name: 'medicine_id',
          type: 'number'
        },
        "practitioner_id": {
          name: 'practitioner_id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        patient: {
          name: 'patient',
          type: 'Patient',
          model: 'Patient'
        },
        medicine: {
          name: 'medicine',
          type: 'Medicine',
          model: 'Medicine'
        },
        practitioner: {
          name: 'practitioner',
          type: 'UserAccount',
          model: 'UserAccount'
        },
      }
    }
  }
}
