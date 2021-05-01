<?php

$data = $_SERVER['PHP_SELF'];
echo("<p><b>A name of file of the executed script:</b> $data</p>");

$data = $_SERVER['argv'];
echo("<p><b>Arguments passed to the script:</b> $data</p>");

$data = $_SERVER['HTTP_HOST'];
echo("<p><b>IP address of the server:</b> $data</p>");

$data = $_SERVER['SERVER_NAME'];
echo("<p><b>A name of current that invoke current script:</b> $data</p>");

$data = $_SERVER['SERVER_PROTOCOL'];
echo("<p><b>A name and a version of the information protocol:</b> $data</p>");

$data = $_SERVER['REQUEST_METHOD'];
echo("<p><b>A query method:</b> $data</p>");

$data = $_SERVER['HTTP_USER_AGENT'];
echo("<p><b>User-Agent information:</b> $data</p>");

$data = $_SERVER['REMOTE_ADDR'];
echo("<p><b>IP address of the client:</b> $data</p>");


?>