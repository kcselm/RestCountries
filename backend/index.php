<?php

function callAPI($method, $url, $data){
  $curl = curl_init();
  switch ($method){
     case "POST":
        curl_setopt($curl, CURLOPT_POST, 1);
        if ($data)
           curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        break;
     case "PUT":
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
        if ($data)
           curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
        break;
     default:
        if ($data)
           $url = sprintf("%s?%s", $url, http_build_query($data));
  }
  // OPTIONS:
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_HTTPHEADER, array(
     'Content-Type: application/json',
  ));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  // EXECUTE:
  $result = curl_exec($curl);
  if(!$result){die("Connection Failure");}
  curl_close($curl);
  
  if ($result[0] == '{') {
    $result = '[' . $result . ']';
  }
  return $result;

  // return preg_match('/.+.{1}(?={"name")/', $result, $matches);
}
$searchTerm = isset($_POST['searchTerm']) ? $_POST['searchTerm'] : null;
echo "this is the searchTerm" . $searchTerm;
$get_data = callAPI('GET', 'https://restcountries.eu/rest/v2/name/col', false);
$response = json_decode($get_data, true);
// $errors = $response['response']['errors'];
// $data = $response['response']['data'][0];
// echo "this is the data\n\n";
// print_r($get_data[0]);
echo $get_data;

?>