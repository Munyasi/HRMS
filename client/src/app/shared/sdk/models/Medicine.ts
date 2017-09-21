/* tslint:disable */

declare var Object: any;
export interface MedicineInterface {
  "name": string;
  "description"?: string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Medicine implements MedicineInterface {
  "name": string;
  "description": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: MedicineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Medicine`.
   */
  public static getModelName() {
    return "Medicine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Medicine for dynamic purposes.
  **/
  public static factory(data: MedicineInterface): Medicine{
    return new Medicine(data);
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
      name: 'Medicine',
      plural: 'Medicines',
      path: 'Medicines',
      properties: {
        "name": {
          name: 'name',
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
      }
    }
  }
}
