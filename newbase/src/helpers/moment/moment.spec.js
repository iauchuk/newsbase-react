import {Moment} from "./moment";
const {default_time_format} = require("../../constants/appConsts");

describe('<Moment />', () => {
   it('should return 12.11.2021 13-11-88', () => {
      const initDate = new Date(1636712499887);
      expect(Moment(default_time_format, initDate)).toEqual('12.11.2021 13-11-88');
   });
   it('should return truthy', () => {
      const initDate = 1636712499887;
       expect(Moment(default_time_format, initDate)).toBeTruthy();
   });
   it('should return transformed value', () => {
      const initDate = '1';
      expect(Moment(default_time_format, initDate)).toEqual('01.01.1970 03-01-00');
   });
   it('should return transformed value if date equal string', () => {
      const initDate = '1636712499887';
      expect(Moment(default_time_format, initDate)).toEqual('12.11.2021 13-11-88');
   });
   it('should return truthy', () => {
      const initDate = undefined;
      expect(Moment(default_time_format, initDate)).toBe(null);
   });
   it('should return null if date equal null', () => {
      const initDate = null;
      expect(Moment(default_time_format, initDate)).toBe(null);
   });
   it('should return truthy if format is empty string', () => {
      const initFormat = '';
      const initDate = 1636712499887;
      expect(Moment(initFormat, initDate)).toBe(null);
   });
   it('should return truthy if format is empty string', () => {
      const initFormat = null;
      const initDate = 1636712499887;
      expect(Moment(initFormat, initDate)).toBeFalsy();
   });
   it('should return 5 if initFormat equal 5', () => {
      const initFormat = 5;
      const initDate = 1636712499887;
      expect(Moment(initFormat, initDate)).toEqual('5');
   });
});