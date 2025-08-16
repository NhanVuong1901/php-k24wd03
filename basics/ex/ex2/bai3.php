<?
function describeType($var)
{
    if (is_null($var)) {
        return "NULL: null";
    } else if (is_bool($var)) {
        return "Boolean: " . ($var ? "true" : "false");    // boolean trả về 1 || 0 nên phải ""
    } else if (is_int($var)) {
        return "Integer: $var";
    } else if (is_float($var)) {
        return "Float: $var";
    } else if (is_string($var)) {
        return "String: \"$var\"";
    } else if (is_array($var)) {
        return "Array: " . json_encode($var, JSON_UNESCAPED_UNICODE); //json_encode chuyển biến PHP sang dạng chuỗi JSON, JSON_UNESCAPED_UNICODE dùng để giữ nguyên Unicode
    } else {
        return "Unknown type.";
    }
}

echo describeType(null) . "<br>";
echo describeType(true) . "<br>";
echo describeType(19) . "<br>";
echo describeType(3.14) . "<br>";
echo describeType("Khanh Nhan") . "<br>";
echo describeType([1, 2, 3, 4]) . "<br>";
