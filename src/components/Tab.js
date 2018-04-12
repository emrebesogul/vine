import React from 'react'
import { Tab, Input, Button, List, Image, Icon, Form } from 'semantic-ui-react'
import avatar from "../assets/images/avatar.png"
import wineImage from '../assets/images/wine-bottle.png'
import {Link } from "react-router-dom";
import './components.css';

class Home extends React.Component{


    createProduct() {
        
    }


  render(){
    return(
        <Tab menu={{ secondary: true, pointing: true }} panes={
          [
           { menuItem: 'Kundenverwaltung', render: () => <Tab.Pane attached={false}>
           <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
               [
                 { menuItem: 'Kunde anlegen', render: () => <Tab.Pane>
                   <div>
                     <h2 className="head-label">Neuen Kunden anlegen</h2>
                     <span className="input-label">Vorname</span>
                     <Input  placeholder="Vorname"/>
                     <span className="input-label-inline" >Nachname</span>
                     <Input className="input-text"  placeholder="Nachname"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Straße und Hausnr.</span>
                     <Input className="input-text"  placeholder="Adresse"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Postleitzahl</span>
                     <Input placeholder="Postleitzahl"/>
                       <span className="input-label-inline" >Ort</span>
                       <Input className="input-text"  placeholder="Ort"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Land</span>
                     <Input className="input-text"  placeholder="Land"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Telefonnummer</span>
                     <Input className="input-text"  placeholder="Telefonnummer"/>
                   </div>
                   <div className="input-fields">
                     <Button id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
                     <Button id="button-save-kunde" className="button-menu">Speichern</Button>
                   </div>

                 </Tab.Pane> },
                 { menuItem: 'Kundenliste', render: () => <Tab.Pane>
                   <h2 className="head-label">Alle Kunden anzeigen</h2>
                   <List divided relaxed selection verticalAlign='middle' size="large">
                    <List.Item>
                      <List.Content floated="right">
                        <Button circular="true" icon="edit"></Button>
                        <Button circular="true" icon="remove"></Button>
                      </List.Content>
                      <Image avatar src={avatar} />
                      <List.Content>
                        <Link to="/kunde/details">
                        <List.Header>Bill Gates</List.Header></Link>
                        <List.Description as='a'>Reutlingen, DE</List.Description>
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
                        <List.Description as='a'>Marseille, FR</List.Description>
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
                        <List.Description as='a'>Saarland, DE</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                 </Tab.Pane> },
               ]
               } defaultActiveIndex={1} />
           </Tab.Pane> },
           { menuItem: 'Lieferanten- und Winzerverwaltung', render: () => <Tab.Pane attached={false}>
           <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
             [
               { menuItem: 'Lieferant anlegen', render: () => <Tab.Pane>
                 <h2 className="head-label">Neuen Lieferanten anlegen</h2>
                 <div>
                   <span className="input-label">Firma</span>
                   <Input  placeholder="Firma"/>
                 </div>
                 <div className="input-fields">
                   <span className="input-label">Vorname</span>
                   <Input   placeholder="Vorname"/>
                   <span className="input-label-inline" >Nachname</span>
                   <Input className="input-text"  placeholder="Nachname"/>
                 </div>
                 <div className="input-fields">
                   <span className="input-label">Straße und Hausnr.</span>
                   <Input className="input-text"  placeholder="Adresse"/>
                 </div>
                 <div className="input-fields">
                   <span className="input-label">Postleitzahl</span>
                   <Input  placeholder="Postleitzahl"/>
                     <span className="input-label-inline" >Ort</span>
                     <Input className="input-text"  placeholder="Ort"/>
                 </div>
                 <div className="input-fields">
                   <span className="input-label">Land</span>
                   <Input className="input-text"  placeholder="Land"/>
                 </div>
                 <div className="input-fields">
                   <span className="input-label">Telefonnummer</span>
                   <Input className="input-text"  placeholder="Telefonnummer"/>
                 </div>
                 <div className="input-fields">
                   <Button id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
                   <Button id="button-save-kunde" className="button-menu">Speichern</Button>
                 </div>

               </Tab.Pane> },
               { menuItem: 'Lieferantenliste', render: () => <Tab.Pane>
                 <h2 className="head-label">Alle Lieferanten anzeigen</h2>
                 <List divided relaxed selection verticalAlign='middle' size="large">
                  <List.Item>
                    <List.Content floated="right">
                      <Button circular="true" icon="euro sign"></Button>
                      <Button circular="true" icon="edit"></Button>
                      <Button circular="true" icon="remove"></Button>
                    </List.Content>
                    <Image avatar src={avatar} />
                    <List.Content>
                      <List.Header>Bill Gates</List.Header>
                      <List.Description as='a'>Reutlingen, DE</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                       <Button circular="true" icon="euro sign"></Button>
                      <Button circular="true" icon="edit"></Button>
                      <Button circular="true" icon="remove"></Button>
                    </List.Content>
                    <Image avatar src={avatar} />
                    <List.Content>
                      <List.Header>Elon Musk</List.Header>
                      <List.Description as='a'>Marseille, FR</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <Button circular="true" icon="euro sign"></Button>
                      <Button circular="true" icon="edit"></Button>
                      <Button circular="true" icon="remove"></Button>
                    </List.Content>
                    <Image avatar src={avatar} />
                    <List.Content>
                      <List.Header>Arnold Schwarzenegger</List.Header>
                      <List.Description as='a'>Saarland, DE</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
               </Tab.Pane> },
             ]
               } defaultActiveIndex={1} />
           </Tab.Pane> },
           { menuItem: 'Lagerverwaltung', render: () => <Tab.Pane attached={false}>
             <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
               [
                { menuItem: 'Produkt anlegen', render: () => <Tab.Pane>
                  <Form onSubmit={this.createProduct}>
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
                            <Link to="/lager/details">
                            <List.Header>Metzinger Weinsteige</List.Header></Link>
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
               } defaultActiveIndex={1}/>
           </Tab.Pane> },
         ]
      } />
    )
  }
}

export default Home
