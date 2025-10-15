const arr = [1, 1, 23, 65, 454, 423];

export function mapRelease<T, K>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => K
): K[] {
  let result: K[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

export function forEachRelease<T>(
  arr: T[],
  callback: (element: T, index: number, arr: T[]) => void
): void {
  for (let i: number = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

export function filterRelease<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => boolean
): T[] {
  let result: T[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

export function findRelease<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => boolean
): T | undefined {
  for (let i: number = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

export function findIndexRelease<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => boolean
): number | undefined {
  for (let i: number = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return undefined;
}

export function someRelease<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => boolean
): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

export function everyRelease<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => boolean
): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

export function includesRelease<T>(arr: T[], item: T): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return true;
    }
  }
  return false;
}

export function indexOfRelease<T>(arr: T[], item: T): number | undefined {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return undefined;
}

export function lastIndexOfRelease<T>(arr: T[], item: T): number | undefined {
  for (let i: number = arr.length - 1; i > 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }
  return undefined;
}

export function reduceRelease<T, K>(
  arr: T[],
  callback: (acc: K, item: T, index: number, arr: T[]) => K,
  initialValue: K
): K {
  let acc = initialValue;
  for (let i: number = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}
arr.concat();

export function concatRelease<T>(arr: T[], ...values: (T | T[])[]): T[] {
  let result: T[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let k: number = 0; k < values.length; k++) {
    let value = values[k];
    if (Array.isArray(value)) {
      for (let j: number = 0; j < value.length; j++) {
        result.push(value[j]);
      }
    } else {
      result.push(value);
    }
  }
  return result;
}

export function sliceRelease<T>(
  arr: T[],
  start: number = 0,
  end?: number
): T[] {
  let result: T[] = [];
  let from =
    start < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
  let to =
    end === undefined
      ? arr.length
      : end < 0
      ? Math.max(arr.length + end, 0)
      : Math.min(arr.length, end);
  if (from >= to) return [];
  if (to > arr.length) {
    to = arr.length;
  }
  for (let i: number = from; i < to; i++) {
    result.push(arr[i]);
  }
  return result;
}

export function spliceReales<T>(
  arr: T[],
  start: number,
  deleteCount?: number,
  ...volume: T[]
): T[] {
  if (start < 0) start = Math.max(arr.length + start, 0);
  else start = Math.min(start, arr.length);

  if (deleteCount === undefined) {
    deleteCount = arr.length - start;
  } else {
    deleteCount = Math.min(Math.max(deleteCount, 0), arr.length - start);
  }
  let removed: T[] = [];
  for (let i: number = start; i < start + deleteCount; i++) {
    removed.push(arr[i]);
  }
  let begin: T[] = sliceRelease(arr, 0, start);
  let midle: T[] = sliceRelease(arr, start + deleteCount);
  let newArray = [...begin, ...volume, ...midle];
  arr.length = 0;
  arr.push(...newArray);
  return removed;
}

export function joinRelease<T>(arr: T[], separator: string = ","): string {
  let result: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += separator;
    result += String(arr[i]);
  }
  return result;
}

export function reverseRelease<T>(arr: T[]): T[] {
  let result: T[] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
