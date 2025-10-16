const arr = [1, 1, 23, 65, 454, 423];

export function map<T, K>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => K
): K[] {
  let result: K[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

export function forEach<T>(
  arr: T[],
  callback: (element: T, index: number, arr: T[]) => void
): void {
  for (let i: number = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

export function filter<T>(
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

export function find<T>(
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

export function findIndex<T>(
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

export function some<T>(
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

export function every<T>(
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

export function includes<T>(arr: T[], item: T): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return true;
    }
  }
  return false;
}

export function indexOf<T>(arr: T[], item: T): number | undefined {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return undefined;
}

export function lastIndexOf<T>(arr: T[], item: T): number | undefined {
  for (let i: number = arr.length - 1; i > 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }
  return undefined;
}

export function reduce<T, K>(
  arr: T[],
  callback: (acc: K, item: T, index: number, arr: T[]) => K,
  initialValue?: K
): K {
  let acc: K;
  let startIndex: number;
  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}

export function concat<T>(arr: T[], ...args: (T | T[])[]): T[] {
  let result: T[] = [...arr];

  for (let argOfArray = 0; argOfArray < args.length; argOfArray++) {
    let arg = args[argOfArray];
    if (Array.isArray(arg)) {
      for (let argIndex: number = 0; argIndex < arg.length; argIndex++) {
        result.push(arg[argIndex]);
      }
    } else {
      result.push(arg);
    }
  }
  return result;
}

export function slice<T>(arr: T[], start: number = 0, end?: number): T[] {
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
  for (let i: number = from; i < to; i++) {
    result.push(arr[i]);
  }
  return result;
}

export function splice<T>(
  arr: T[],
  start: number,
  deleteCount?: number,
  ...args: T[]
): T[] {
  let copyOfStart: number = start;
  let copyOfDeleteCount = deleteCount;
  if (start < 0) copyOfStart = Math.max(arr.length + start, 0);
  else copyOfStart = Math.min(copyOfStart, arr.length);

  if (copyOfDeleteCount === undefined) {
    copyOfDeleteCount = arr.length - start;
  } else {
    copyOfDeleteCount = Math.min(
      Math.max(copyOfDeleteCount, 0),
      arr.length - start
    );
  }
  let removed: T[] = [];
  for (let i: number = copyOfStart; i < copyOfStart + copyOfDeleteCount; i++) {
    removed.push(arr[i]);
  }
  arr.length = 0;
  arr.push(
    ...[
      ...slice(arr, 0, start),
      ...args,
      ...slice(arr, start + copyOfDeleteCount),
    ]
  );
  return removed;
}

export function join<T>(arr: T[], separator: string = ","): string {
  let result: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += separator;
    result += String(arr[i]);
  }
  return result;
}

export function reverse<T>(arr: T[]): T[] {
  let result: T[] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

export function flat<T>(arr: T[], vol: number = 1): T[] {
  let result: any[] = arr;
  for (let i = 0; i < vol; i++) {
    let temp: any[] = [];
    for (let j = 0; j < result.length; i++) {
      const el = result[j];
      if (Array.isArray(el)) {
        temp = concat(temp, el);
      } else {
        temp.push(el);
      }
    }
    result = temp;
  }
  return result;
}

export function fill<T, K>(
  arr: T[],
  val: K | K[],
  start?: number,
  end?: number
) {}
