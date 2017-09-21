/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { UserAccount } from '../../models/UserAccount';
import { Patient } from '../../models/Patient';
import { Hospital } from '../../models/Hospital';
import { PatientHospital } from '../../models/PatientHospital';
import { Medicine } from '../../models/Medicine';
import { PatientMedicine } from '../../models/PatientMedicine';
import { Insurance } from '../../models/Insurance';
import { PatientInsurance } from '../../models/PatientInsurance';
import { Disease } from '../../models/Disease';
import { PatientDisease } from '../../models/PatientDisease';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    UserAccount: UserAccount,
    Patient: Patient,
    Hospital: Hospital,
    PatientHospital: PatientHospital,
    Medicine: Medicine,
    PatientMedicine: PatientMedicine,
    Insurance: Insurance,
    PatientInsurance: PatientInsurance,
    Disease: Disease,
    PatientDisease: PatientDisease,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
