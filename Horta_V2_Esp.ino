#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DHT.h>

const char* ssid = "Moraes";
const char* password = "98569000";

ESP8266WebServer server(80);

#define DHTPIN 4
#define Sensorsolo A0
#define DHTTYPE DHT22

const int relayPin = 5; // Defina o pino onde o relé está conectado

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  delay(50);
  dht.begin();

  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Garante que o relé inicie desligado

  Serial.println("Conectando a Rede: ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi Conectado");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  server.on("/", handle_OnConnect);
  server.on("/on", handle_TurnOn); // Novo handler para ligar o relé
  server.on("/off", handle_TurnOff); // Novo handler para desligar o relé
  server.onNotFound(handle_NotFound);

  server.begin();
  Serial.println("Servidor HTTP inicializado");
}

void loop() {
  server.handleClient();
}

void handle_OnConnect() {
  float temperatura = dht.readTemperature();
  float umidade = dht.readHumidity();
  int umidadeSolo = analogRead(Sensorsolo);

  int umidadeSoloPercentual = map(umidadeSolo, 0, 1023, 100, 0);

  String response = "{\"temperatura\": " + String(temperatura) + ", \"umidade\": " + String(umidade) + ", \"umidade_solo\": " + String(umidadeSoloPercentual) + "}";
  
  // Configuração de cabeçalhos CORS
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Max-Age", "10000");
  server.sendHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "*");

  server.send(200, "application/json", response);
}

void handle_TurnOn() {
  digitalWrite(relayPin, LOW); // Liga o relé

  server.send(200, "text/plain", "Relé ligado");
}

void handle_TurnOff() {
  digitalWrite(relayPin, HIGH); // Desliga o relé

  server.send(200, "text/plain", "Relé desligado");
}

void handle_NotFound() {
  server.send(404, "text/plain", "Não encontrado");
}
