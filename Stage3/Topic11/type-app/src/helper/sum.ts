import type { MonitorNameParams } from '../types/helper';

export function sum(a: number, b: number): number {
  const result = a + b;

  return result;
}

export function monitorName(data: MonitorNameParams): void {
  const { name, surname, isShow } = data;

  const result = isShow ? `${name} ${surname}` : '';
  console.log(result);
}
