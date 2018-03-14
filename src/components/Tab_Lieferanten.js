import React from 'react'
import { Tab, Input, Button, List, Image } from 'semantic-ui-react'
import './components.css';
import avatar from "../assets/images/avatar.png";


const panes = [
  { menuItem: 'Lieferant anlegen', render: () => <Tab.Pane>
    <div>
      <span className="input-label">Firma</span>
      <Input  focus placeholder="Firma"/>
    </div>
    <div className="input-fields">
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
    <div className="input-fields">
      <Button id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
      <Button id="button-save-kunde" className="button-menu">Speichern</Button>
    </div>

  </Tab.Pane> },
  { menuItem: 'Lieferantenliste', render: () => <Tab.Pane>
    <List selection verticalAlign='middle' size="large">
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <List.Header>Bill Gates</List.Header>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <List.Header>Elon Musk</List.Header>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <List.Header>Arnold Schwarzenegger</List.Header>
       </List.Content>
     </List.Item>
   </List>
  </Tab.Pane> },
  { menuItem: 'Drucken', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} defaultActiveIndex={1} />
)

export default TabExampleVerticalTrue
