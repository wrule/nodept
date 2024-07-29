
export
function hello() {
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
