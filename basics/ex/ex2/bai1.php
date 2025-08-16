<?
$hoTen = "Vương Khánh Nhân";
$namSinh = 2002;
$queQuan = "Bình Dương";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tags & Escaping from HTML</title>
</head>

<body>
    <table border="1" cellpadding="5" style="text-align: center;">
        <tr>
            <th>Họ tên</th>
            <th>Năm sinh</th>
            <th>Quê quán</th>
        </tr>
        <tr>
            <td><?= $hoTen ?></td>
            <td><?= $namSinh ?></td>
            <td><?= $queQuan ?></td>
        </tr>
    </table>
    <p><?= "Thông tin đã được cập nhật thành công!" ?></p>
</body>

</html>