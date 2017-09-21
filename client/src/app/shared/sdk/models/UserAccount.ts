/* tslint:disable */

declare var Object: any;
export interface UserAccountInterface {
  "practitioner_type": string;
  "practitioner_full_name": string;
  "practitioner_code": string;
  "gender": string;
  "dob": Date;
  "phone_number": string;
  "profile_picture"?: string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  "password"?: string;
  accessTokens?: any[];
}

export class UserAccount implements UserAccountInterface {
  "practitioner_type": string;
  "practitioner_full_name": string;
  "practitioner_code": string;
  "gender": string;
  "dob": Date;
  "phone_number": string;
  "profile_picture": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  "password": string;
  accessTokens: any[];
  constructor(data?: UserAccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserAccount`.
   */
  public static getModelName() {
    return "UserAccount";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserAccount for dynamic purposes.
  **/
  public static factory(data: UserAccountInterface): UserAccount{
    return new UserAccount(data);
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
      name: 'UserAccount',
      plural: 'UserAccounts',
      path: 'UserAccounts',
      properties: {
        "practitioner_type": {
          name: 'practitioner_type',
          type: 'string'
        },
        "practitioner_full_name": {
          name: 'practitioner_full_name',
          type: 'string'
        },
        "practitioner_code": {
          name: 'practitioner_code',
          type: 'string'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "dob": {
          name: 'dob',
          type: 'Date'
        },
        "phone_number": {
          name: 'phone_number',
          type: 'string'
        },
        "profile_picture": {
          name: 'profile_picture',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
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
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
