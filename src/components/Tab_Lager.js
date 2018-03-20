import React from 'react'
import { Tab, Input, Button, Image, List, Form } from 'semantic-ui-react'
import './components.css';
import wineImage from '../assets/images/wine-bottle.png'


const panes = [
  { menuItem: 'Produkt anlegen', render: () => <Tab.Pane>
    <Form>
      <h2 className="head-label">Neues Produkt anlegen</h2>
      <div className="">
        <span className="input-label">Produkttitel</span>
        <Input className="input-text"  placeholder="Produkttitel"/>
      </div>
      <div className="input-fields">
        <span className="input-label">Produktionsjahr</span>
        <Input className="input-text"  placeholder="Produktionsjahr"/>
      </div>
      <div className="input-fields">
        <span className="input-label">Produktherkunft</span>
        <Input className="input-text"  placeholder="Produktherkunft"/>
      </div>
      <div className="input-fields">
        <span className="input-label">Anzahl</span>
        <Input className="input-text"  placeholder="Anzahl"/>
      </div>
      <div className="input-fields">
        <span className="input-label">Einkaufspreis</span>
        <Input className="input-text"  placeholder="Einkaufspreis"/>
      </div>
      <div className="input-fields">
        <span className="input-label">Verkaufspreis</span>
        <Input className="input-text"  placeholder="Verkaufspreis"/>
      </div>
      <div className="input-fields">
        <Button id="button-cancel-lager" align="right" className="button-menu">Abbrechen</Button>
        <Button id="button-save-lager" className="button-menu">Speichern</Button>
      </div>
    </Form>

  </Tab.Pane> },
  { menuItem: 'Lagerbestand', render: () => <Tab.Pane>
    <h2 className="head-label">Aktuelle Lagerbestände anzeigen</h2>
    <div class="ui search">
      <div class="ui icon input">
        <input id="search-lager" class="prompt" type="text" placeholder="Nach Produkten suchen..."/>
        <i class="search icon"></i>
      </div>
      <div class="results"></div>
    </div>

    <List divided relaxed selection verticalAlign='middle' size="large">
      <List.Item>
        <List.Content floated="right">
          <Button className="large-button"  circular="true" icon="plus"></Button>
          <Button className="large-button"  circular="true" icon="minus"></Button>
          <Button className="large-button"  circular="true" icon="edit"></Button>
          <Button className="large-button"  circular="true" icon="remove"></Button>
        </List.Content>
        <Image avatar src={wineImage} />
        <List.Content>
          <List.Header onClick="
            let wrapper = document.getElementById('modal-wrap');
            wrapper.setAttribue('display', 'block');
            " >Metzinger Weinsteige</List.Header>
           <List.Description as='a'>Auf Lager: 5 Stück</List.Description>
           <List.Description as='a'>Metzingen, DE</List.Description>
            <List.Description as='a'>1997</List.Description>
        </List.Content>
      </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button className="large-button"  circular="true" icon="plus"></Button>
         <Button className="large-button"  circular="true" icon="minus"></Button>
         <Button className="large-button"  circular="true" icon="edit"></Button>
         <Button className="large-button"  circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={wineImage} />
       <List.Content>
         <List.Header>Spätburgunder</List.Header>
           <List.Description as='a'>Auf Lager: 5 Stück</List.Description>
           <List.Description as='a'>Metzingen, DE</List.Description>
           <List.Description as='a'>1996</List.Description>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button className="large-button"  circular="true" icon="plus"></Button>
         <Button className="large-button"  circular="true" icon="minus"></Button>
         <Button className="large-button"  circular="true" icon="edit"></Button>
         <Button className="large-button"  circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={wineImage} />
       <List.Content>
         <List.Header>Trocken</List.Header>
            <List.Description as='a'>Auf Lager: 5 Stück</List.Description>
            <List.Description as='a'>Bempflingen, DE</List.Description>
           <List.Description as='a'>2013</List.Description>
       </List.Content>
     </List.Item>
   </List>
  </Tab.Pane> },

]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} defaultActiveIndex={1}/>
)

export default TabExampleVerticalTrue
