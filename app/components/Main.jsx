var React = require('react');
var Navigation = require('Navigation');

var Main = ({children}) =>
    <div>
      <div>
        <div>
          <Navigation/>
          {children}
        </div>
      </div>
    </div>
;

module.exports = Main;
