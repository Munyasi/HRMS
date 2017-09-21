/* tslint:disable */

declare var Object: any;
export interface DiseaseInterface {
  "name": string;
  "description"?: string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Disease implements DiseaseInterface {
  "name": string;
  "description": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: DiseaseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Disease`.
   */
  public static getModelName() {
    return "Disease";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Disease for dynamic purposes.
  **/
  public static factory(data: DiseaseInterface): Disease{
    return new Disease(data);
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
      name: 'Disease',
      plural: 'Diseases',
      path: 'Diseases',
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
