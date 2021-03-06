import { generateId } from "@rivalsdb/id";

import "../styles.sass";

import { Elm } from "./app";
import { Auth } from "./auth";
import { fetchCards } from "./cardData";
import { Tracker } from "./tracker";

async function main() {
  const [cards, { auth, userData }] = await Promise.all([
    fetchCards(),
    Auth.create(),
  ]);

  const app = Elm.Main.init({ flags: { cards, userData } });

  app.ports.generateId.subscribe(async () =>
    generateId().then(app.ports.receivedId.send)
  );

  app.ports.initiateLogin.subscribe(() => auth.signIn());
  app.ports.signOut.subscribe(() => auth.signOut());
  auth.setUserDataCallback(app.ports.signInReceiver.send);

  const tracker = new Tracker();
  app.ports.trackEvent.subscribe((ev) => tracker.trackEvent(ev.name, ev.extra));
}

main();
