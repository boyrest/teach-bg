export function ErrorMessage(code) {
  let str = "";
  switch (code) {
    case -1007:
      str = "该用户不存在！";
      break;
    case -1009:
      str = "密码错误！";
      break;
  }
  return str;
}