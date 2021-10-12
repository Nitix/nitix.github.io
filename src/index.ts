import "./main.css"
import Konami from 'konami-ramen';

let konami = new Konami(undefined, undefined, undefined, true);

console.log(`Vous connaissez le devtools ?


 _____     ______     __   __   ______   ______     ______     __         ______    
/\\  __-.  /\\  ___\\   /\\ \\ / /  /\\__  _\\ /\\  __ \\   /\\  __ \\   /\\ \\       /\\  ___\\   
\\ \\ \\/\\ \\ \\ \\  __\\   \\ \\ \\'/   \\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\___  \\  
 \\ \\____-  \\ \\_____\\  \\ \\__|      \\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\/\\_____\\ 
  \\/____/   \\/_____/   \\/_/        \\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/


La programmation vous intéresse ?

Venez ..., euh, venez ...

...

Ah non c'est vrai je postule. 🤷‍♂️`);

/*
 _____     ______     __   __   ______   ______     ______     __         ______    
/\  __-.  /\  ___\   /\ \ / /  /\__  _\ /\  __ \   /\  __ \   /\ \       /\  ___\   
\ \ \/\ \ \ \  __\   \ \ \'/   \/_/\ \/ \ \ \/\ \  \ \ \/\ \  \ \ \____  \ \___  \  
 \ \____-  \ \_____\  \ \__|      \ \_\  \ \_____\  \ \_____\  \ \_____\  \/\_____\ 
  \/____/   \/_____/   \/_/        \/_/   \/_____/   \/_____/   \/_____/   \/_____/
*/


konami.on('success', () => {
    document.body.setAttribute('contentEditable', "true");
});

konami.on('input', (event: KonamiInputEvent) => {
    if (event.match && event.key === 'a') {
        document.body.classList.add("shake")
        setTimeout(() => {
            document.body.classList.remove("shake")
        }, 500);
    } else {
        if (event.match) {
            console.log('Something is happening ' + '!'.repeat(event.position + 1));
        }
    }
})

konami.start();

interface KonamiInputEvent {
    key: string,
    match: boolean,
    position: number,
    keyboardEvent: KeyboardEvent
}