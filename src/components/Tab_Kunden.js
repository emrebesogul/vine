import React from 'react'
import { Tab, Input, Button } from 'semantic-ui-react'
import './components.css';


const panes = [
  { menuItem: 'Kunde anlegen', render: () => <Tab.Pane>
    <div>
      <span className="input-label">Vorname</span>
      <Input  focus placeholder="Vorname"/>
      <span className="input-label-inline" >Nachname</span>
      <Input className="input-text" focus placeholder="Nachname"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Adresse</span>
      <Input className="input-text" focus placeholder="Adresse"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Postleitzahl</span>
      <Input focus placeholder="Postleitzahl"/>
        <span className="input-label-inline" >Ort</span>
        <Input className="input-text" focus placeholder="Ort"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Land</span>
      <Input className="input-text" focus placeholder="Land"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Telefonnummer</span>
      <Input className="input-text" focus placeholder="Telefonnummer"/>
    </div>

  </Tab.Pane> },
  { menuItem: 'Kunden anzeigen', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Drucken', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TabExampleVerticalTrue
