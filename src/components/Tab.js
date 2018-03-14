import React from 'react'
import { Tab, Icon } from 'semantic-ui-react';
import Lagerverwaltung from './Lagerverwaltung.js';
import Kundenverwaltung from './Kundenverwaltung.js';
import Lieferantenverwaltung from './Lieferantenverwaltung.js';
import Verkauf from './Verkauf.js';

const panes = [
  { menuItem: "Verkauf", render: () => <Tab.Pane attached={false}>
  <Verkauf />
  </Tab.Pane> },
  { menuItem: 'Kundenverwaltung', render: () => <Tab.Pane attached={false}>
  <Kundenverwaltung />
  </Tab.Pane> },
  { menuItem: 'Lieferanten- und Winzerverwaltung', render: () => <Tab.Pane attached={false}>
  <Lieferantenverwaltung />
  </Tab.Pane> },
  { menuItem: 'Lagerverwaltung', render: () => <Tab.Pane attached={false}>
    <Lagerverwaltung />
  </Tab.Pane> },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing
