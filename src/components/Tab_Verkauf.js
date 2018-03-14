import React from 'react'
import { Tab, Input, List, Button, Image } from 'semantic-ui-react'
import './components.css';
import wineImage from '../assets/images/wine-bottle.png'


const panes = [
  { menuItem: 'Aktueller Verkauf', render: () => <Tab.Pane>
    <div>
        <span className="input-label">Kundenname</span>
        <Input placeholder="Kundenname" readOnly></Input>
        <span className="input-label-inline">Kundennr</span>
        <Input placeholder="Kundennummer" readOnly></Input>
    </div>
    <div className="input-fields">
      <List divided relaxed selection verticalAlign='middle' size="large">
       <List.Item>
         <List.Content floated="right">
           <Button circular="true" icon="remove"></Button>
         </List.Content>
         <Image avatar src={wineImage} />
         <List.Content>
           <List.Header>Spätburgunder</List.Header>
           <List.Description as='a'>Art. Nr. 10209123</List.Description>
           <List.Description as='a'>10.99€</List.Description>
         </List.Content>
       </List.Item>
       <List.Item>
         <List.Content floated="right">
           <Button circular="true" icon="remove"></Button>
         </List.Content>
         <Image avatar src={wineImage} />
         <List.Content>
           <List.Header>Apfel Most</List.Header>
           <List.Description as='a'>Art. Nr. 10209146</List.Description>
           <List.Description as='a'>2.99€</List.Description>
         </List.Content>
       </List.Item>
     </List>
    </div>
    <div className="input-fields">
      <span className="input-label">Gesamtpreis: </span>
    </div>
  </Tab.Pane> },
  { menuItem: 'Letzte Verkäufe', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Rechnung drucken', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TabExampleVerticalTrue
