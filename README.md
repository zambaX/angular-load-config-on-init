# ProvaSettings
Questo progetto descrive il metodo per disporre di un file di configurazione json presente nella directory assets **liberamente modificabile DOPO il build in produzione**
E' stato serenamente scopiazzato da questo [stackblitz](https://stackblitz.com/edit/angular-load-config-on-init-kaefr4)

In breve, si tratta di lanciare una funzione durante l'inizializzazione della App.
Per far questo si sfrutta APP_INITIALIZER, a cui si da in pasto un service che legge (mediante HttpClient) il file json.
APP_INITIALIZER ha bisogno di una *factory* da invocare, ovvero una funzione, che nel nostro caso sfrutta la DI per utilizzare il service sopra indicato.

E' più facile leggere app.module che non spiegarlo a parole....

E' stato provato eseguendo ng build --prod e dando in pasto la *dist* ottenuta a http-server.
Il componente app.component in console mostra il contenuto del file config.json (ovviamente il file deve rispettare l'interface indicata nel model\config.model.ts).
Modificando le proprietà del file config.json l'output in console cambia di conseguenza...

## maledette marmotte, FUNZIONA! ##





