# SHR Test Helpers

The Standard Health Record (SHR) initiative is working to create a single, high-quality health record for every individual in the United States.  For more information, see [standardhealthrecord.org](http://standardhealthrecord.org/).

This GitHub repository contains classes and functions that can be re-used in unit tests for SHR tools.

As the SHR models and tools are still evolving, so is this library.

# Setting Up the Environment

This project has been developed and tested with Node.js 6.6, although other versions _may_ work.  After installing Node.js, change to the project directory and _npm install_ the dependencies:
```
$ npm install
```

# Linting the Code

To encourage quality and consistency within the code base, all code should pass eslint without any warnings.  Many text editors can be configured to automatically flag eslint violations.  We also provide an npm script for running eslint on the project.  To run eslint, execute the following command:
```
$ npm run lint
```

# License

Copyright 2016 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
