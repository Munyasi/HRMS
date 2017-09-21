/* tslint:disable */
import {
  Patient,
  Disease,
  UserAccount
} from '../index';

declare var Object: any;
export interface PatientDiseaseInterface {
  "diagnosis_code": string;
  "id"?: number;
  "patient_id"?: number;
  "disease_id"?: number;
  "practitioner_id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  patient?: Patient;
  disease?: Disease;
  practitioner?: UserAccount;
}

export class PatientDisease implements PatientDiseaseInterface {
  "diagnosis_code": string;
  "id": number;
  "patient_id": number;
  "disease_id": number;
  "practitioner_id": number;
  "createdAt": Date;
  "updatedAt": Date;
  patient: Patient;
  disease: Disease;
  practitioner: UserAccount;
  constructor(data?: PatientDiseaseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PatientDisease`.
   */
  public static getModelName() {
    return "PatientDisease";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PatientDisease for dynamic purposes.
  **/
  public static factory(data: PatientDiseaseInterface): PatientDisease{
    return new PatientDisease(data);
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
      name: 'PatientDisease',
      plural: 'PatientDiseases',
      path: 'PatientDiseases',
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
        "disease_id": {
          name: 'disease_id',
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
        disease: {
          name: 'disease',
          type: 'Disease',
          model: 'Disease'
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
