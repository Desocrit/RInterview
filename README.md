# Calculator

### Operation

* The app can be run using npm start (after npm install), and tested using npm test.
* The calculator can be used responsively to calculate Either or CombinedWith.
* Operation can be selected using the dropdown in the middle.
* Operands (either side of this) can be set to values between 0 and 1.
* Any other value will trigger validation errors.
* Clicking Solve (when the state is dirty and invalid) will produce the solution.
* This also creates a log, which can be viewed or filtered below.

### Extensibility

* Operators are implemented using the Strategy pattern, and so can easily be added.
  To do this, implement the Operator interface, and add it to the App class.
* Additional users can easily be added by modifying the User state in App.tsx.
  UserType is specified in config.json, and can easily be modified.

### TODO

Ultimately, the pure client side implementation has persistence issue,
does not support multiple clients, and lacks users functionality.

A simple nancy/web api server would alleviate this.