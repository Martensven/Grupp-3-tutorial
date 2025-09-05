# Grupp-3-tutorial

# Interfaces and types

## A. Introduktion

### Vad är Interface?  
Interface är en "mall" som talar om vilka fält ett objekt har och vilken typ av värde de olika fälten ska innehålla.
Ex: en Person (objektet) har ett namn (som måste vara en sträng med text), en ålder (som måste vara ett nummer), och kan ha en roll (t.ex. student).

I kodform:
```ts
interface Person { // Vårat objekt
  namn: string; // Fältet "namn" ska innehålla en sträng med text
  ålder: number; // Fältet "ålder" ska innehålla ett nummer
  roll: Roll // Fältet "roll" ska innehålla en Roll
}
```
  
### Vad är Type (Type alias)?  
Type alias tilldelar namn till en egenskapad typ och är bra att använda när man t.ex. vill säga "antingen X eller Y".
Ex: en persons (objektets) roll kan antingen vara student eller inte vara student.

I kodform:
```ts
// Vi skapar en egen typ och döper den till "Roll"
type Roll = "student" | "ickeStudent"; // När vi använder typen Roll i vår kod så ska fältet innehålla ANTINGEN "student" ELLER "ickeStudent"
```

### När och varför ska man använda Interface och Type?  

1. Koden blir lättare att förstå då man lätt kan se vad olika delar av koden förväntas innehålla, t.ex. att en Person alltid ska ha ett namn (och namnet ska vara en textsträng,
 en ålder (som ska vara et nummer) och en roll (som vi kan bestämma vilka alternativ vi vill godkänna).

3. Datorn varnar när något saknas eller blir fel, t.ex. om man skulle försöka skriva in ett namn (en textsträng) där man ska fylla i sin ålder (som måste vara ett nummer).

4. Det blir svårare att blanda ihop saker. Om du skapar en typ Roll = "student" | "ickeStudent", så kan du inte råka skriva "lärare" utan typerna skyddar dig från stavfel eller påhittade värden.

5. Interface och type gör koden både tydligare för oss och säkrare för datorn.

Sammanfattat så är interface som ett formulär du måste fylla i, där alla fält måste vara ifyllda (om man inte specifikt tillåtit annat) och de måste vara ifyllda med 
rätt typ av värde (textsträng, nummer, osv), medan type är som en lista med tillåtna svarsalternativ, t.ex. kan en persons roll vara student eller ickestudent men inte lärare.

## B. Vanliga fel och felsökning
Skapa 3-5 exempel på vanliga fel nybörjare gör med detta koncept
Visa felmeddelanden från TypeScript
Förklara hur man löser varje fel


## C. Ert kompletta program
Presentera programmet med tydliga kommentarer
Förklara hur konceptet används i praktiken
Inkludera instruktioner för hur man kör programmet


## D. Övningsuppgift
Ge läsaren en uppgift där de ska utöka eller modifiera ert program
Inkludera ledtrådar men inte hela lösningen
