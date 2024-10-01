import { Component } from '@angular/core';
import { Device } from 'src/models/Device';
import { DeviceTypes } from 'src/models/DeviceTypes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  buttonTimeout: any[] = [];
  constructor() {}

  devices: Device[] = [
    {
      id: 1,
      name: 'test1',
      type: DeviceTypes.Switch,
      on: true,
    },
    {
      id: 2,
      name: 'test2',
      type: DeviceTypes.Light,
      on: false,
    },
    {
      id: 3,
      name: 'test3',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
    {
      id: 4,
      name: 'test4',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
    {
      id: 4,
      name: 'test4',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
    {
      id: 4,
      name: 'test4',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
    {
      id: 4,
      name: 'test4',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
    {
      id: 4,
      name: 'test4',
      type: DeviceTypes.MotionSensor,
      on: false,
    },
  ];
  holdDevice(device: Device) {
    if (Object.keys(this.buttonTimeout).includes(device.id.toString())) {
      clearTimeout(this.buttonTimeout[device.id]);
      delete this.buttonTimeout[device.id];
    }
    this.buttonTimeout[device.id] = setTimeout(() => {
      delete this.buttonTimeout[device.id];
      this.OpenOptions(device);
    }, 100);
  }
  clickDevice(device: Device) {
    if (Object.keys(this.buttonTimeout).includes(device.id.toString())) {
      clearTimeout(this.buttonTimeout[device.id]);
      delete this.buttonTimeout[device.id];
    }
    this.buttonTimeout[device.id] = setTimeout(() => {
      delete this.buttonTimeout[device.id];
      this.TurnOnOff(device);
    }, 100);
  }
  OpenOptions(device: Device) {
    alert('hold');
  }
  TurnOnOff(device: Device) {
    device.on = !device.on;
  }
}
