<?
$a = "15 cats";
$b = "3.14159abc";
$c = "hello123";
$d = "024";

$result = $a + $b + $d; // + $c sẽ bị dừng chương trình

echo "Kết quả cộng: $result<br>";
echo "Kiểu dữ liệu của kết quả: " . gettype($result) . "<br>";

echo "<p>Giải thích: Khi cộng thì PHP sẽ cộng các số lại (phần chữ thì PHP sẽ tính là 0), nếu chuỗi bắt đầu là chữ thì không thể cộng được (lỗi chương trình)</p>";