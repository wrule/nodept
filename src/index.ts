import http from 'http';
import './JSON-js/cycle.js';

declare global {
  interface JSON {
    decycle(value: any, replacer?: (value: any) => any): any;
    retrocycle(value: any): any;
  }
}

export
function hello() {
  traverse(http, (key, value) => {
    console.log(key, value);
    return value;
  })
  console.log('hello world!');
}

export
type Proto =
  '[object Object]' |
  '[object Array]' |
  '[object String]' |
  '[object Number]' |
  '[object Boolean]' |
  '[object Function]' |
  '[object Date]' |
  '[object RegExp]' |
  '[object Error]' |
  '[object Null]' |
  '[object Undefined]';

export
function proto(data: any) {
  return Object.prototype.toString.call(data) as Proto;
}

export
function traverse(
  data: any,
  mapping: (key: string, value: any) => any,
  parentKey = '$',
) {
  const prototype = proto(data);
  if (prototype === '[object Object]' || prototype === '[object Array]') {
    Object.entries(data).forEach(([key, value]) => {
      const newKey = `${parentKey}['${key}']`;
      data[key] = traverse(value, mapping, newKey);
    });
  }
  return mapping(parentKey, data);
}
