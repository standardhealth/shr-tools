# shr-json-javadoc

This project will convert the canonical JSON files into HTML that form a javadoc style representation.

## Installing the Project
Before getting started on any development, one will need to have the following installed:

- [Git](https://git-scm.com/)
- [Nodejs.org](https://nodejs.org/en/)

From the command line, execute the following command in the directory where you want the spec_json2html directory to be put:

```
git clone https://github.com/standardhealth/shr-json-javadoc.git
```

## Setting Up the Environment
```
$ cd shr-json-javadoc/
$ npm install
```
You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) for the grunt CLI.


## Building the HTML
To assemble the project, assuming the canonical json is in the same directory, run:
```
$ node index.js
```

To customize the output and source directories, use flags
```
$ node index.js -s ../canonicaljson -o ./javadocs
```

To open the site, open `index.html` in your browser.

###[The MITRE Corporation](https://www.mitre.org/)

The MITRE Corporation is a not-for-profit organization working in the public interest that operates federally funded research and development centers to provide innovative solutions to national problems.


### License

Copyright 2017 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
```
    http://www.apache.org/licenses/LICENSE-2.0
```
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.