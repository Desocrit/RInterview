# Calculator

### Setup

* npm install should be used in the root folder, and nuget restore in the server folder.
* The app can be run using npm start, and tested with npm test. This works with no server.
* The server can be run as per a usual C# sln file.
* To enable interop, set useRemote in src/config.json to true.

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
* Remote operators are accessed via the server, and so can be added with no client side changes.

### Concerns

* While enough tests have been provided for an example, test coverage is far too low for a real project.
* Deadlock could be formed if multiple server threads hog the lock on the log file.
* Error handling on the client side is somewhat poor - many errors are not fixed.
  This could be improved by falling back to client side code if server requests fail.
* Everything was committed on master.
