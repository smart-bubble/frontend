import { DeviceTypes } from './DeviceTypes';

export interface Device {
  id: number;
  name: string;
  type: DeviceTypes;
  on: boolean;
  argument?: string;
}
