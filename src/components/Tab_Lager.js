import React from 'react'
import { Tab, Input, Button, Image, List } from 'semantic-ui-react'
import './components.css';
import wineImage from '../assets/images/wine-bottle.png'

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
  { menuItem: 'Lagerbestand', render: () => <Tab.Pane>
    <List selection verticalAlign='middle' size="large">
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={wineImage} />
       <List.Content>
         <List.Header>Spätburgunder</List.Header>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={wineImage} />
       <List.Content>
         <List.Header>Metzinger Weinsteige</List.Header>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={wineImage} />
       <List.Content>
         <List.Header>Trocken</List.Header>
       </List.Content>
     </List.Item>
   </List>
  </Tab.Pane> },
  { menuItem: 'Quittung drucken', render: () => <Tab.Pane>
    <img alt="" src="https://c.s-microsoft.com/de-de/CMSImages/Windows_Homepage_4Up_AllinOne_1920.jpg?version=04a0f379-f5f8-50eb-88db-ba512f505d82"/>
  </Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} defaultActiveIndex={1}/>
)

export default TabExampleVerticalTrue
