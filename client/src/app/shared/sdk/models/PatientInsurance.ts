/* tslint:disable */
import {
  Patient,
  Insurance,
  UserAccount
} from '../index';

declare var Object: any;
export interface PatientInsuranceInterface {
  "id"?: number;
  "patient_id"?: number;
  "insurance_id"?: number;
  "practitioner_id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  patient?: Patient;
  insurance?: Insurance;
  practitioner?: UserAccount;
}

export class PatientInsurance implements PatientInsuranceInterface {
  "id": number;
  "patient_id": number;
  "insurance_id": number;
  "practitioner_id": number;
  "createdAt": Date;
  "updatedAt": Date;
  patient: Patient;
  insurance: Insurance;
  practitioner: UserAccount;
  constructor(data?: PatientInsuranceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PatientInsurance`.
   */
  public static getModelName() {
    return "PatientInsurance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PatientInsurance for dynamic purposes.
  **/
  public static factory(data: PatientInsuranceInterface): PatientInsurance{
    return new PatientInsurance(data);
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
      name: 'PatientInsurance',
      plural: 'PatientInsurances',
      path: 'PatientInsurances',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "patient_id": {
          name: 'patient_id',
          type: 'number'
        },
        "insurance_id": {
          name: 'insurance_id',
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
        insurance: {
          name: 'insurance',
          type: 'Insurance',
          model: 'Insurance'
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
