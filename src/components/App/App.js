import React, { Component } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';

import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu className="app-menu" inverted>
          <Dropdown item icon="wrench">
            <Dropdown.Menu style={{ width: 164 }}>
              <Dropdown.Item text="New" description="Ctrl + N" />
              <Dropdown.Item text="Open" description="Ctrl + O" />
              <Dropdown.Item text="Save" description="Ctrl + S" />
              <Dropdown.Divider />
              <Dropdown.Item text="Exit" description="Alt + F4" />
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item icon="edit">
            <Dropdown.Menu style={{ width: 180 }}>
              <Dropdown.Item text="Undo" description="Ctrl + Z" />
              <Dropdown.Item
                disabled
                text="Redo"
                description="Ctrl + Shift +Z"
              />
              <Dropdown.Divider />
              <Dropdown.Item text="Cut" description="Ctrl + X" />
              <Dropdown.Item text="Copy" description="Ctrl + C" />
              <Dropdown.Item text="Paste" description="Ctrl + V" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <div className="app-container">
          <LeftPanel />

          <div className="engine-container">
            <div className="engine" />
            <div className="app-panel bottom">
              <Segment vertical>panel</Segment>
              <Segment vertical>panel</Segment>
            </div>
          </div>

          <div className="app-panel vertical right">
            <Segment vertical>panel</Segment>
            <Segment vertical>panel</Segment>
            <Segment vertical>panel</Segment>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
