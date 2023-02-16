![Latitude X logo](/public/logo/latitudex-logo-default.svg)

# Latitude X

Benvenuti nell'ambiente di sviluppo di latitude X, un'applicazione web in `node` basata su `Nuxt3` ([vedi documentazione](https://nuxt.com/)), in modalità *content driven* ([vedi documentazione](https://content-v2.nuxtjs.org)).

## Indice

1. Requisiti
1. Installazione
1. Comandi
1. Impostazioni del sito, file `app.config`
1. File e immagini, la cartella `public`
1. Contenuti, la cartella `content`
    1. viaggi
    1. destinazioni
    1. pagine
1. *Front matter cheatsheet*
1. Uso del markdown
    1. `content-big`
    1. `content-small`
    1. `content-gallery`
    1. `content-icon`
    1. `content-columns`

## Requisiti

Per installare e far girare questa applicazione sulla propria macchina locale, è necessario avere:

1. `git`: apri il terminale e lancia il comando `git --version` e segui le istruzioni per installare *Xcode*
1. `node` v.16 o superiore: [scarica da questo link](https://nodejs.org/it/download/).
1. `yarn`: una volta installato `node` lancia da terminale: `npm install --global yarn`

Per accedere al tuo account su github puoi usare [questa guida](https://kbroman.org/github_tutorial/pages/first_time.html).

*Nota: non necessario usare `yarn` se si vuole usare `npm`*

## Installazione

1. Scarica questo repo:

```bash
git clone git@github.com:lc-d/latitude-x.git
```

2. Entra nella cartella del progetto e installa le dipendenze di `node`:

```bash
cd latitude-x
yarn install
```

3. Lancia l'applicazione in locale:

```bash
yarn dev
```

**Fatto!**

Ora puoi navigare l'applicazione all'indirizzo [http://localhost:3000](http://localhost:3000).

## Comandi

L'applicazione è fornita di alcuni comandi per terminale:

| Comando | Funzione |
|--|--|
|`yarn dev`| Esegue l'applicazione in locale
|`yarn new-destinazione`| Crea un nuovo file in markdown nella cartella `/content/destinazioni`|
|`yarn new-viaggio`| Crea un nuovo file in markdown nella cartella `/content/viaggi`|
|`yarn new-pagina`| Crea un nuovo file in markdown nella cartella `/content`|
|`yarn deploy`| Copia le modifiche in locale sul repo di Github e mette on line una nuova versione del sito

## Impostazioni del sito, file `app.config`

Nel file `/app.config.ts` sono contenute le seguenti informazioni:

- `info`, dove sono definiti:
  - Numero di telefono e indirizzo e-mail del box di contatto
  - Numero di elementi paginati nell'elenco dei viaggi
  - Il link al profilo Youtube e Instagram presenti al pie' di pagina
- `text`, dove ci sono i testi statici del sito
- `meta`, dove ci sono i meta dati delle pagine statiche del sito
- `communtity`, dove si trova l'elenco dei membri della community mostrato nella homepage
- `sponsor`, dove si trova l'elenco degli sponsor mostrato nella homepage

Gli elementi della `communtity` e degli `sponsor` sono definiti da due propietà

- `name`: il nome visualizzato sotto la foto
- `src`: il nome del file della foto, che deve essere messo dentro la cartella `/public/img/community`, per la community, dentro `/public/img/sponsor` per gli sponsor.

## File e immagini, la cartella `public`

Tutti i file statici sono conservati dentro la cartella `/public`. Al suo interno ci sono le cartelle `/public/logo` – dove c'è il logo nelle sue diverse versioni – e `/public/img` dove si possono mettere tutte le immagini richiamate negli articoli. All'interno di quest'ultima cartella ci sono due sotto cartelle:

- `/public/img/default`: dove sono conservate tutte le immagini di base del sito
- `/public/img/community` e `/public/img/sponsor`: dove ci sono tutte le foto dei membri della community e degli sponsor. *Nota bene*: queste immagini dovrebbero essere dei quadrati di 280x280 pixel

La dimensione massima di un'immagine non dovrebbe superere i 1440px di lato, con una risoluzione di 72dpi.

## Contenuti, la cartella `content`

Tutte le pagine del sito, ad eccezione dell'homepage `/`, di `/destinazioni` e `/viaggi`, corrispondo ai relativi file in markdown dentro la cartella `/content` e nelle relative sotto cartelle.

L'url della pagina è costituito dal nome del file e dalla sotto cartella in cui si trova, es.: *https://latitudex.it/viaggi/alta-via-del-granito-prima-tappa* corrisponde al markdown dentro la cartella `/content/viaggi` col nome: *alta-via-del-granito-prima-tappa.md*.

*Nota bene*: Il nome del file corrisponde allo *slug* della pagina, pertanto non usare caratteri speciali nei nomi dei file.

### Viaggi

Dentro la cartella `/content/viaggi` sono contenuti tutti gli articoli nella categoria "viaggi". Un articolo del tipo *viaggi* è un file markdown, dotato di un *frontmatter*, come nell'esempio che segue:

```markdown
---
title: "Alta Via del Granito - Prima Tappa"
cover_image: "/img/altaviagranito-lagorai_autunno-2021.jpg"
video_id: "C4vNW3yo5YQ"
location_name: "Lagorai"
description: "La nostalgia della Translagorai ci ha portato sull'Alta via del Granito. Nonostante il freddo pungente e già proiettati sullo scialpinismo, ci siamo rimessi gli scarponi per percorrere questo itinerario, che ci ha stupito per la sua bellezza"
layout: "viaggi"
date: "2023-02-09T14:57:46.645"
draft: "false"
---

Corpo del testo
```

### Destinazioni

Dentro la cartella `/content/destinazioni` sono contenuti tutti gli articoli nella categoria "destinazioni". Un articolo del tipo *destinazioni* è un file markdown, dotato di un *frontmatter*, come nell'esempio che segue:

```markdown
---
title: "Translagorai"
cover_image: "/img/sassorosso-lagorai_estate-2021.jpg"
location_name: "Lagorai"
season: "estate"
difficulty: "alta"
activity: "trekking"
description: "La Translagorai è un trekking di più giorni che attraversa tutta la selvaggia catena del Lagorai, dalla Panarotta a passo Rolle."
layout: "destinazioni"
date: "2023-02-04T13:27:11.546"
draft: "false"
---

Corpo del testo
```

### Pagine

Dentro la cartella `/content` sono contenuti tutte le pagine statiche che sono richiamate dal menu di navigazione o da un altro link interno. Una pagina è un file markdown, dotato di un *frontmatter*, come nell'esempio che segue:

```markdown
---
cover_image: ""
description: ""
layout: "page"
---

Corpo del testo
```

## *Front-matter cheatsheet*

| Attributo | Descrizione |
|--|--|
|`title`| Il titolo dell'articolo, corrisponde all'`h1`. *Nota bene*: dove presente non va messo nel corpo del testo un altro `h1`, es.: `# titolo`, ma solo `h2`, es.: `## titolo`.
|`cover_image`| L'immagine di copertina, meglio se in formato orizzontale.|
|`video_id`| L'id del video youtube da integrare nell'articolo.|
|`location_name`| Il nome della location rappresenta una chiave per collegare tra loro le "destinazioni" con i "viaggi".|
|`season`| Possibili valori sono: `autunno`, `primavera`, `estate` e `inverno`.
|`difficulty`| Indicare la difficoltà nel modo più opportuno. |
|`activity`| Possibili valori sono:  `trekking`, `ciclismo` e `navigazione`.
|`layout`| Definisce il layout della pagina, deve avere uno di questi valori: `destinazioni`, `viaggi` o `page`.|
|`description`| Si riferisce alla descrizione per i motori di ricerca, dovrebbe essere lunga circa 155 caratteri. |
|`date`| La data dell'articolo in formato anglossassone. Viene mostrata (mese e anno) solo nei "viaggi" ma viene sempre usata per definire l'ordinamento nelle liste, dal più recente al meno recente. *Nota bene*: anno e giorno sono invertiti in questo formato, es: `date: "2023-02-06T13:27:11.546"` corrisponde al 6 febbraio 2023, dopo la "T" segue l'ora. |
|`draft`| Può avere due valori: `"true"` o `"false"`, se `"true"` allora l'articolo non verrà mostrato nelle liste. |

## Uso del markdown

Con il markdown è possibile inserire contenuti e formattare il testo come indicato in [questa guida](https://www.markdownguide.org/cheat-sheet/). Questa applicazione inoltre mette a disposizione delle formattazioni speciali del testo attraverso i *content slot*.

### `content-big`

Permettere di avere un testo più grande senza ricorre ai titoli, es.:

```markdown
::content-big
Lorem ipsum dolor sit amet
::
```

### `content-small`

Permettere di avere un testo più piccolo, es.:

```markdown
::content-small
Lorem ipsum dolor sit amet
::
```

### `content-gallery`

Crea una galleria di immagini, es.:

```markdown
::content-gallery
---
images: [ 
    {
        src: '/img/nome-file-1.jpg',
        caption: 'Didascalia immagine 1'
    },
    {
        src: '/img/nome-file-2.jpg',
        caption: 'Didascalia immagine 2'
    },
    {
        src: '/img/nome-file-3.jpg'
    }
]
---
::
```

### `content-icon`

Permette di inserire un'icona in linea col testo, es.:

```markdown
::content-icon{icon="nome-icona"}
::
```

Si può definire anche una dimensione e un diverso colore in questo modo:

```markdown
::content-icon
---
icon: nome-icona
size: xl
color: primary
---
::
```

Valori possibili:

- `size`:
  - xs
  - sm
  - lg
  - xl
- `color`:
  - primary
  - primary-light
  - primary-light-opacity
  - primary-dark
  - primary-darker
  - accent
  - grey
  - grey-light
  - grey-lighter
  - grey-dark
  - false-white
  - black
- `icon`:
  - copy
  - link
  - facebook
  - linkedin
  - twitter
  - back
  - goto
  - arrow-next
  - menu
  - close
  - chevron-right
  - chevron-left
  - chevron-down
  - chevron-up
  - phone
  - mail
  - mobile
  - trekking
  - heart
  - estate
  - autunno
  - inverno
  - primavera
  - location
  - ciclismo
  - whatsapp
  - instagram
  - youtube

### `content-columns`

Permette di creare due clonne dentro la pagina, es.:

```markdown

::content-columns
#left
Lorem ipsum doloro sit amet

#right
Lorem ipsum doloro sit amet
::
```
