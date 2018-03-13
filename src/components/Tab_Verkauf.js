import React from 'react'
import { Tab } from 'semantic-ui-react'
import './components.css';


const panes = [
  { menuItem: 'Aktueller Verkauf', render: () => <Tab.Pane>

  </Tab.Pane> },
  { menuItem: 'Letzte Verkäufe', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Rechnung drucken', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
)

export default TabExampleVerticalTrue
