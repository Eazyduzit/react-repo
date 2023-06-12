import './App.css';

import { Header } from "@sikt/sds-header";
import { Footer } from "@sikt/sds-footer";

import { Section } from "@sikt/sds-section";

import { Badge } from "@sikt/sds-badge";
import { PrimaryButton } from "@sikt/sds-button";
import { SecondaryButton } from "@sikt/sds-button";
import { TertiaryButton } from "@sikt/sds-button";


function App() {
  return (
    <div>
      <Header>Welcome to this page!</Header>

      <Section />
      
      <h1>Hola, Mundo!</h1>


      
      <PrimaryButton>Hei, Verden!</PrimaryButton>
      <SecondaryButton>Hei, Verden!</SecondaryButton>
      <TertiaryButton>Hei, Verden!</TertiaryButton>

      <Section />

      <Badge>Hello, World!</Badge>

      <Footer>Some footer content...</Footer>
    </div>
  );
}

export default App;
