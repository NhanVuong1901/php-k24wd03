<?
$data = [
    "name" => "Vuong Khanh Nhan",
    "password" => "!Abcd1234",
    "email" => "vuongkhanhnhan@gmail.com",
    "profession" => "Developer",
    "address" => "527/19 Dien Bien Phu, phuong 25, Binh Thanh, TP HCM",
    "role" => "admin",
];

$roles = ["admin", "user", "moderator"];

$errors = [];

// 1. name (min 5 characters)
if (empty($data["name"]) || strlen($data["name"]) < 5) {
    $errors[] = "Name phải ít nhất 5 ký tự";
}

// 2. password (min 6, ít nhất 1 ký tự viết hoa, 1 special character)
if (
    empty($data["password"]) ||
    !preg_match("/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/", $data["password"])
) {
    $errors[] = "Password phải ≥6 ký tự, có ít nhất 1 chữ hoa và 1 ký tự đặc biệt.";
}

// 3. email (phải có @)
if (empty($data["email"]) || !filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email không hợp lệ.";
}

// 4. Profession (require)
if (empty($data["profession"])) {
    $errors[] = "Profession là bắt buộc.";
}

// 5. Address (số nhà, đường, quận, city)
if (empty($data["address"]) || !preg_match("/[0-9]+.*,.+,.+,.+/", $data["address"])) {
    $errors[] = "Address phải có số nhà, đường, quận, thành phố.";
}

// 6. Role (enum)
if (empty($data["role"]) || !in_array($data["role"], $roles)) {
    $errors[] = "Role không hợp lệ.";
}

if ($errors) {
    echo "Dữ liệu không hợp lệ:\n";
    echo implode("\n", $errors);
} else {
    echo "Dữ liệu hợp lệ!";
}