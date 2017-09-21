/* tslint:disable */
import {
  Patient
} from '../index';

declare var Object: any;
export interface HospitalInterface {
  "name": string;
  "phone_number": string;
  "email": string;
  "city": string;
  "town": string;
  "address": string;
  "description": string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  patients?: Patient[];
}

export class Hospital implements HospitalInterface {
  "name": string;
  "phone_number": string;
  "email": string;
  "city": string;
  "town": string;
  "address": string;
  "description": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  patients: Patient[];
  constructor(data?: HospitalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Hospital`.
   */
  public static getModelName() {
    return "Hospital";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Hospital for dynamic purposes.
  **/
  public static factory(data: HospitalInterface): Hospital{
    return new Hospital(data);
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
      name: 'Hospital',
      plural: 'Hospitals',
      path: 'Hospitals',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "phone_number": {
          name: 'phone_number',
          type: 'string'
        },
        "email": {
          name: 'email',
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
        "address": {
          name: 'address',
          type: 'string'
        },
        "description": {
          name: 'description',
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
        patients: {
          name: 'patients',
          type: 'Patient[]',
          model: 'Patient'
        },
      }
    }
  }
}
