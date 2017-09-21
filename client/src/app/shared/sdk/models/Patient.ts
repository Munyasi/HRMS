/* tslint:disable */
import {
  PatientHospital
} from '../index';

declare var Object: any;
export interface PatientInterface {
  "first_name": string;
  "middle_name": string;
  "surname": string;
  "dob": Date;
  "gender": string;
  "marital_status": string;
  "occupation"?: string;
  "email"?: string;
  "phone_number"?: string;
  "city": string;
  "town": string;
  "postal_code": number;
  "postal_address": string;
  "street": string;
  "emergency_contact_name": string;
  "emergency_contact_relation": string;
  "emergency_contact_phone": string;
  "notes"?: string;
  "authorization_code"?: string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  hospitals?: PatientHospital[];
}

export class Patient implements PatientInterface {
  "first_name": string;
  "middle_name": string;
  "surname": string;
  "dob": Date;
  "gender": string;
  "marital_status": string;
  "occupation": string;
  "email": string;
  "phone_number": string;
  "city": string;
  "town": string;
  "postal_code": number;
  "postal_address": string;
  "street": string;
  "emergency_contact_name": string;
  "emergency_contact_relation": string;
  "emergency_contact_phone": string;
  "notes": string;
  "authorization_code": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  hospitals: PatientHospital[];
  constructor(data?: PatientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Patient`.
   */
  public static getModelName() {
    return "Patient";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Patient for dynamic purposes.
  **/
  public static factory(data: PatientInterface): Patient{
    return new Patient(data);
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
      name: 'Patient',
      plural: 'Patients',
      path: 'Patients',
      properties: {
        "first_name": {
          name: 'first_name',
          type: 'string'
        },
        "middle_name": {
          name: 'middle_name',
          type: 'string'
        },
        "surname": {
          name: 'surname',
          type: 'string'
        },
        "dob": {
          name: 'dob',
          type: 'Date'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "marital_status": {
          name: 'marital_status',
          type: 'string'
        },
        "occupation": {
          name: 'occupation',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "phone_number": {
          name: 'phone_number',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "town": {
          name: 'town',
          type: 'string'
        },
        "postal_code": {
          name: 'postal_code',
          type: 'number'
        },
        "postal_address": {
          name: 'postal_address',
          type: 'string'
        },
        "street": {
          name: 'street',
          type: 'string'
        },
        "emergency_contact_name": {
          name: 'emergency_contact_name',
          type: 'string'
        },
        "emergency_contact_relation": {
          name: 'emergency_contact_relation',
          type: 'string'
        },
        "emergency_contact_phone": {
          name: 'emergency_contact_phone',
          type: 'string'
        },
        "notes": {
          name: 'notes',
          type: 'string'
        },
        "authorization_code": {
          name: 'authorization_code',
          type: 'string'
        },
        "id": {
          name: 'id',
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
        hospitals: {
          name: 'hospitals',
          type: 'PatientHospital[]',
          model: 'PatientHospital'
        },
      }
    }
  }
}
