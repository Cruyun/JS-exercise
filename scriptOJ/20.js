/*
#20 正则表达式删除两端多余空白字符

完成正则表达式 TRIM_REGX，可以用它来删除一个字符串前后多余的空白字符。

例如：

' ScriptOJ   '.replace(TRIM_REGX, '') // => ScriptOJ
*/
const TRIM_REGX = /(^\s*)|(\s*$)/g

/*
^表示字符串必须以后面的规则开头, 在这里就是说字符串必须以\s*开头
\s 是空格的意思, * 表示有0个或多个
\s* 就是有0个或多个空格
(^\s*) 表示的就是以0个空格或者多个空格开头
| 表示或的意思, 也就是满足| 左边的也成立, 满足 | 右面的也成立
$ 的意思是字符串必须以前面的规则结尾
(\s*$) 的意思就是, 以0个空格或者多个空格结尾
/…/g 是正则表达式的属性, 表示全文匹配, 而不是找到一个就停止
*/