/* tslint:disable */

declare var Object: any;
export interface InsuranceInterface {
  "name": string;
  "description"?: string;
  "email": string;
  "phone_number": string;
  "head_office_address": string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Insurance implements InsuranceInterface {
  "name": string;
  "description": string;
  "email": string;
  "phone_number": string;
  "head_office_address": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: InsuranceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Insurance`.
   */
  public static getModelName() {
    return "Insurance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Insurance for dynamic purposes.
  **/
  public static factory(data: InsuranceInterface): Insurance{
    return new Insurance(data);
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
      name: 'Insurance',
      plural: 'Insurances',
      path: 'Insurances',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
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
        "head_office_address": {
          name: 'head_office_address',
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
      }
    }
  }
}
