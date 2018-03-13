import React from 'react'
import { Tab, Input, Button } from 'semantic-ui-react'
import './components.css';


const panes = [
  { menuItem: 'Wein anlegen', render: () => <Tab.Pane>
    <div className="">
      <span className="input-label">Name des Weins</span>
      <Input className="input-text" focus placeholder="Name des Weins.."/>
    </div>
    <div className="input-fields">
      <span className="input-label">Jahrgang des Weins</span>
      <Input className="input-text" focus placeholder="Jahrgang des Weins.."/>
    </div>
    <div className="input-fields">
      <span className="input-label">Herkunft des Weins</span>
      <Input className="input-text" focus placeholder="Herkunft des Weins.."/>
    </div>
    <div className="input-fields">
      <Button align="right" className="button-menu">Abbrechen</Button>
      <Button id="button-save" className="button-menu">Speichern</Button>
    </div>
  </Tab.Pane> },
  { menuItem: 'Lagerbestand anzeigen', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Quittung drucken', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TabExampleVerticalTrue
