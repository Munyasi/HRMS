/* tslint:disable */
import {
  Patient,
  Hospital,
  UserAccount
} from '../index';

declare var Object: any;
export interface PatientHospitalInterface {
  "diagnosis_code": string;
  "id"?: number;
  "patient_id"?: number;
  "hospital_id"?: number;
  "practitioner_id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  patient?: Patient;
  hospital?: Hospital;
  practitioner?: UserAccount;
}

export class PatientHospital implements PatientHospitalInterface {
  "diagnosis_code": string;
  "id": number;
  "patient_id": number;
  "hospital_id": number;
  "practitioner_id": number;
  "createdAt": Date;
  "updatedAt": Date;
  patient: Patient;
  hospital: Hospital;
  practitioner: UserAccount;
  constructor(data?: PatientHospitalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PatientHospital`.
   */
  public static getModelName() {
    return "PatientHospital";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PatientHospital for dynamic purposes.
  **/
  public static factory(data: PatientHospitalInterface): PatientHospital{
    return new PatientHospital(data);
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
      name: 'PatientHospital',
      plural: 'PatientHospitals',
      path: 'PatientHospitals',
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
        "hospital_id": {
          name: 'hospital_id',
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
        hospital: {
          name: 'hospital',
          type: 'Hospital',
          model: 'Hospital'
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
