<?php
header('Content-Type: application/json');

$data = [
    'time' => date('H:i:s'),
    'date' => date('Y-m-d')
];

echo json_encode($data);
