# Grupp-3-tutorial

# Interfaces and types

## A. Introduktion

### Vad är Interface?

Interface är en "mall" som talar om vilka fält ett objekt har och vilken typ av värde de olika fälten ska innehålla.
Ex: en Person (objektet) har ett namn (som måste vara en sträng med text), en ålder (som måste vara ett nummer), och kan ha en roll (t.ex. student).

I kodform:

```ts
interface Person {
  // Vårat objekt
  namn: string; // Fältet "namn" ska innehålla en sträng med text
  ålder: number; // Fältet "ålder" ska innehålla ett nummer
  roll: Roll; // Fältet "roll" ska innehålla en Roll
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

2. Datorn varnar när något saknas eller blir fel, t.ex. om man skulle försöka skriva in ett namn (en textsträng) där man ska fylla i sin ålder (som måste vara ett nummer).

3. Det blir svårare att blanda ihop saker. Om du skapar en typ Roll = "student" | "ickeStudent", så kan du inte råka skriva "lärare" utan typerna skyddar dig från stavfel eller påhittade värden.

4. Interface och type gör koden både tydligare för oss och säkrare för datorn.

Sammanfattat så är interface som ett formulär du måste fylla i, där alla fält måste vara ifyllda (om man inte specifikt tillåtit annat) och de måste vara ifyllda med
rätt typ av värde (textsträng, nummer, osv), medan type är som en lista med tillåtna svarsalternativ, t.ex. kan en persons roll vara student eller ickestudent men inte lärare.

## B. Vanliga fel och felsökning

### Exempel 1: Glömt fylla i alla fält (som kräver ett värde) i ett objekt

```ts
interface Person {
  name: string;
  age: number;
}

const p: Person = { name: "Anna" };
```

**Felmeddelande i VS Code:**

```python
Property 'age' is missing in type '{ name: string; }'
but required in type 'Person'. (TS2741)
```

**Vad betyder det?**

Vi har bestämt att en Person måste ha både name och age. Här saknas age.

**Lösning:** Lägg till det saknade fältet.

```ts
const p: Person = { name: "Anna", age: 36 };
```

### Exempel 2: Felaktigt värde i en type

```ts
type Role = "student" | "nonStudent";

const r: Role = "teacher";
```

**Felmeddelande i VS Code:**

```python
Type '"teacher"' is not assignable to type '"student" | "nonStudent"'. (TS2322)
```

**Vad betyder det?**

Vi har bestämt att Role bara kan vara "student" eller "nonStudent". "teacher" finns inte med på listan med tillåtna svarsalternativ.

**Lösning:** Använd ett värde som finns med i listan med tillåtna svarsalternativ för Role.

```ts
const r: Role = "student";
```

### Exempel 3: Fel metod för fel typ

```ts
interface Person {
  name: string;
  age: number;
  student: boolean;
}

const p: Person = { name: "Anna", age: 15, student: true };
console.log(p.student.toUpperCase()); // Vi försöker skriva ut värdet för student i VERSALER
```

**Felmeddelande i VS Code:**

```python
Property 'toUpperCase' does not exist on type 'boolean'. (TS2339)
```

**Vad betyder det?**

toUpperCase fungerar bara på text (t.ex. "hej" toUpperCase() blir "HEJ").
Men här är student en boolean, som bara kan vara true eller false, inte en text.

**Lösning:** Använd en if-sats för att kolla om personen är student, och om personen är student, skriv ut "Den här personen är student".

```ts
if (p.student) {
  console.log("Den här personen är student");
}
```

### Exempel 4: Anger inte rätt element-typ vid querySelector

```ts
const form = document.querySelector("#person-form")!; // Formulär för att fylla i personuppgifter
form.submit(); // .submit() skickar den info som fyllts i via formuläret
```

**Felmeddelande i VS Code:**

```python
Property 'submit' does not exist on type 'Element'. (TS2339)
```

**Vad betyder det?**

querySelector kan i teorin hämta vilket element som helst (div, p, article, osv.). TypeScript tolkar därför bara att form är ett element (har typen "Element").
Men metoden submit() fungerar inte på ett vanligt element, det är specifikt för form. TypeScript säger därför till att "jag kan inte använda submit() här eftersom
jag inte vet om det kommer fungera".

**Lösning:** Ange typen direkt:

```ts
const form = document.querySelector<HTMLFormElement>("#person-form")!; // Vi säger till TypeScript att form är ett <HTMLFormElement>
form.submit(); // TypeScript vet att submit() fungerar på ett <form>-element och godkänner lösningen.
```

## C. Ert kompletta program

Presentera programmet med tydliga kommentarer
Förklara hur konceptet används i praktiken
Inkludera instruktioner för hur man kör programmet

## D. Övningsuppgift

Du ska lägga till ett till fält för Email. Du har redan HTML-koden, det är bara att ta bort kommentaren för den.

> [!TIP]
> Tänk på vad fältet har för namn

I `Main.ts` ska du lägga till nödvändig kod för att värdet i email-fältet syns på sidan när du trycker på "Skicka in".
