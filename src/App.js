import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container has-background-dark has-text-white has-text-weight-light">
        <div className="columns">
          <div className="column">
            <div className="level">
              <div className="level-item is-size-2">
                Calories Calculator
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="level">
            <div className="level-left">Gender
            <div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Other dropdown item
      </a>
      <a href="#" class="dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" class="dropdown-item">
        Other dropdown item
      </a>
      <hr class="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
