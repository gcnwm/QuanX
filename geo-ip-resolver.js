if ($response.statusCode != 200) {
    $done(Null);
  }
  
  var body = $response.body;
  var obj = JSON.parse(body);
  var title = obj['region'];
  var subtitle = obj['city'] + ' ' + obj['org'];
  var ip = obj['ip'];
  var description = "国家" + ":" + obj['region'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['org'];
  
  
  $done({title, subtitle, ip, description});